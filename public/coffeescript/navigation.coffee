

class Navigation
    constructor: (camera) ->
        @camera = camera
        @target = new THREE.Vector3 0, 0, 0

        @settings =
            movementSpeed: 1.0
            lookSpeed: 0.005
            noFly: false
            lookVertical: true
            autoForward: false
            activeLook: true
            clickMove: false
            heightSpeed: false
            heightCoef: 1.0
            heightMin: 0.0
            constrainVertical: false
            verticalMin: 0
            verticalMax: Math.PI
            autoSpeedFactor: 0.0
            mouseX: 0
            mouseY: 0
            lat: 0
            lon: 0
            phi: 0
            theta: 0
            moveForward: false
            moveBackward: false
            moveLeft: false
            moveRight: false
            freeze: false
            mouseDragOn: false

    changeSettings: (settings) ->
        if settings?
            @settings = settings

        return @settings

    update: ( delta ) ->
        actualMoveSpeed = 0
        if @settings.freeze
            return

        if @settings.heightSpeed
            y = THREE.Math.clamp( @camera.position.y, @settings.heightMin, @settings.heightMax )
            heightDelta = y - @settings.heightMin
            @settings.autoSpeedFactor = delta * ( heightDelta * @settings.heightCoef )
        else
            @settings.autoSpeedFactor = 0.0

        actualMoveSpeed = delta * @settings.movementSpeed
        if @settings.moveForward or ( @settings.autoForward and !@settings.moveBackward )
            @camera.translateZ( - ( actualMoveSpeed + @settings.autoSpeedFactor ) )

        if @settings.moveBackward
            @camera.translateZ( actualMoveSpeed )

        if @settings.moveLeft
            @camera.translateX( - actualMoveSpeed )

        if @settings.moveRight
            @camera.translateX( actualMoveSpeed )

        if !@settings.noFly
            if ( @settings.moveUp )
                @camera.translateY( actualMoveSpeed )

            if ( @settings.moveDown )
                @camera.translateY( - actualMoveSpeed )

        actualLookSpeed = delta * @settings.lookSpeed
        if !@settings.activeLook
            actualLookSpeed = 0

        @settings.lon += @settings.mouseX * actualLookSpeed
        if  @settings.lookVertical
            @settings.lat -= @settings.mouseY * actualLookSpeed

        @settings.lat = Math.max( - 85, Math.min( 85, @settings.lat ) )
        @settings.phi = ( 90 - @settings.lat ) * Math.PI / 180
        @settings.theta = @settings.lon * Math.PI / 180

        targetPosition = @settings.target
        position = @camera.position

        targetPosition.x = position.x + 100 * Math.sin( @settings.phi ) * Math.cos( @settings.theta )
        targetPosition.y = position.y + 100 * Math.cos( @settings.phi )
        targetPosition.z = position.z + 100 * Math.sin( @settings.phi ) * Math.sin( @settings.theta )

        verticalLookRatio = 1
        if @settings.constrainVertical
            verticalLookRatio = Math.PI / ( @settings.verticalMax - @settings.verticalMin )

        @settings.lon += @settings.mouseX * actualLookSpeed
        if @settings.lookVertical
            @settings.lat -= @settings.mouseY * actualLookSpeed * verticalLookRatio

        @settings.lat = Math.max( - 85, Math.min( 85, @settings.lat ) )
        @settings.phi = ( 90 - @settings.lat ) * Math.PI / 180

        @settings.theta = @settings.lon * Math.PI / 180

        if @settings.constrainVertical
            @settings.phi = THREE.Math.mapLinear( @settings.phi, 0, Math.PI, @settings.verticalMin, @settings.verticalMax )

        targetPosition = @settings.target
        position = @camera.position

        targetPosition.x = position.x + 100 * Math.sin( @settings.phi ) * Math.cos( @settings.theta )
        targetPosition.y = position.y + 100 * Math.cos( @settings.phi )
        targetPosition.z = position.z + 100 * Math.sin( @settings.phi ) * Math.sin( @settings.theta )

        @camera.lookAt targetPosition

if !window.flightSim2?
    window.flightSim2 = {}

window.flightSim2.initNavigation = (camera, location) ->
    navigation = new Navigation camera
    return navigation
