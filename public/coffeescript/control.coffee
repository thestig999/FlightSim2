# controls.coffee
# Author: Jason Grant
# Date: 10/10/2014


class Control
    constructor: (object, domElement) ->
        @object = object
        @target = new THREE.Vector3 0, 0, 0

        if domElement?
            @domElement = domElement
        else 
            @domElement = document

        @movementSpeed = 1.0
        @lookSpeed = 0.005

        @noFly = false
        @lookVertical = true
        @autoForward = false
        @activeLook = true
        @clickMove = false
        @heightSpeed = false
        @heightCoef = 1.0
        @heightMin = 0.0
        @constrainVertical = false
        @verticalMin = 0
        @verticalMax = Math.PI
        @autoSpeedFactor = 0.0
        @mouseX = 0
        @mouseY = 0
        @lat = 0
        @lon = 0
        @phi = 0
        @theta = 0

        @moveForward = false
        @moveBackward = false
        @moveLeft = false
        @moveRight = false
        @freeze = false

        @mouseDragOn = false

        if @domElement is document
            @viewHalfX = window.innerWidth / 2
            @viewHalfY = window.innerHeight / 2
        else
            @viewHalfX = @domElement.offsetWidth / 2
            @viewHalfY = @domElement.offsetHeight / 2
            @domElement.setAttribute 'tabindex', -1



@onMouseDown: ( event ) {

    if ( @domElement !== document ) {

        @domElement.focus()

}

event.preventDefault()
event.stopPropagation()

if ( @clickMove ) {

    switch ( event.button ) {

        case 0: @moveForward = true break
    case 2: @moveBackward = true break

}

}

@mouseDragOn = true

}

@onMouseUp: ( event ) {

event.preventDefault()
event.stopPropagation()

if ( @clickMove ) {

    switch ( event.button ) {

        case 0: @moveForward = false break
    case 2: @moveBackward = false break

}

}

@mouseDragOn = false

}

@onMouseMove: ( event ) {

    if ( @domElement === document ) {

        @mouseX = event.pageX - @viewHalfX
        @mouseY = event.pageY - @viewHalfY

} else {

@mouseX = event.pageX - @domElement.offsetLeft - @viewHalfX
@mouseY = event.pageY - @domElement.offsetTop - @viewHalfY

}

}

@onKeyDown: ( event ) {

    switch( event.keyCode ) {

        case 38: /*up*/
        case 87: /*W*/ @moveForward = true break

case 37: /*left*/
case 65: /*A*/ @moveLeft = true break

case 40: /*down*/
case 83: /*S*/ @moveBackward = true break

case 39: /*right*/
case 68: /*D*/ @moveRight = true break

case 82: /*R*/ @moveUp = true break
case 70: /*F*/ @moveDown = true break

case 81: /*Q*/ @freeze = !@freeze break

}

}

@onKeyUp: ( event ) {

    switch( event.keyCode ) {

        case 38: /*up*/
        case 87: /*W*/ @moveForward = false break

case 37: /*left*/
case 65: /*A*/ @moveLeft = false break

case 40: /*down*/
case 83: /*S*/ @moveBackward = false break

case 39: /*right*/
case 68: /*D*/ @moveRight = false break

case 82: /*R*/ @moveUp = false break
case 70: /*F*/ @moveDown = false break

}

}

@update = function( delta ) {
var actualMoveSpeed = 0

if ( @freeze ) {

    return

} else {

if ( @heightSpeed ) {

var y = THREE.Math.clamp( @object.position.y, @heightMin, @heightMax )
    var heightDelta = y - @heightMin

    @autoSpeedFactor = delta * ( heightDelta * @heightCoef )

} else {

@autoSpeedFactor = 0.0

}

actualMoveSpeed = delta * @movementSpeed

if ( @moveForward || ( @autoForward && !@moveBackward ) ) {
    @object.translateZ( - ( actualMoveSpeed + @autoSpeedFactor ) )
    if (checkWallCollision(@object.position)) {
        @object.translateZ( actualMoveSpeed + @autoSpeedFactor )
    }
}
if ( @moveBackward ) {
    @object.translateZ( actualMoveSpeed )
    if (checkWallCollision(@object.position)) {
        @object.translateZ( - actualMoveSpeed )
    }
}

if ( @moveLeft ) {
    @object.translateX( - actualMoveSpeed )
    if (checkWallCollision(@object.position)) {
        @object.translateX( actualMoveSpeed )
    }
}
if ( @moveRight ) {
    @object.translateX( actualMoveSpeed )
    if (checkWallCollision(@object.position)) {
        @object.translateX( - actualMoveSpeed )
    }
}

if (!@noFly) {
    if ( @moveUp ) {
        @object.translateY( actualMoveSpeed )
        if (checkWallCollision(@object.position)) {
            @object.translateY( - actualMoveSpeed )
        }
    }
    if ( @moveDown ) {
        @object.translateY( - actualMoveSpeed )
        if (checkWallCollision(@object.position)) {
            @object.translateY( actualMoveSpeed )
        }
    }
}

var actualLookSpeed = delta * @lookSpeed

if ( !@activeLook ) {

actualLookSpeed = 0

}

@lon += @mouseX * actualLookSpeed
if( @lookVertical ) @lat -= @mouseY * actualLookSpeed // * @invertVertical?-1:1

@lat = Math.max( - 85, Math.min( 85, @lat ) )
@phi = ( 90 - @lat ) * Math.PI / 180
@theta = @lon * Math.PI / 180

var targetPosition = @target,
    position = @object.position

targetPosition.x = position.x + 100 * Math.sin( @phi ) * Math.cos( @theta )
targetPosition.y = position.y + 100 * Math.cos( @phi )
targetPosition.z = position.z + 100 * Math.sin( @phi ) * Math.sin( @theta )

}

var verticalLookRatio = 1

if ( @constrainVertical ) {

verticalLookRatio = Math.PI / ( @verticalMax - @verticalMin )

}

@lon += @mouseX * actualLookSpeed
if( @lookVertical ) @lat -= @mouseY * actualLookSpeed * verticalLookRatio

@lat = Math.max( - 85, Math.min( 85, @lat ) )
@phi = ( 90 - @lat ) * Math.PI / 180

@theta = @lon * Math.PI / 180

if ( @constrainVertical ) {

    @phi = THREE.Math.mapLinear( @phi, 0, Math.PI, @verticalMin, @verticalMax )

}

var targetPosition = @target,
    position = @object.position

targetPosition.x = position.x + 100 * Math.sin( @phi ) * Math.cos( @theta )
targetPosition.y = position.y + 100 * Math.cos( @phi )
targetPosition.z = position.z + 100 * Math.sin( @phi ) * Math.sin( @theta )

@object.lookAt( targetPosition )

}


@domElement.addEventListener( 'contextmenu', function ( event ) { event.preventDefault() }, false )

@domElement.addEventListener( 'mousemove', bind( this, @onMouseMove ), false )
@domElement.addEventListener( 'mousedown', bind( this, @onMouseDown ), false )
@domElement.addEventListener( 'mouseup', bind( this, @onMouseUp ), false )
@domElement.addEventListener( 'keydown', bind( this, @onKeyDown ), false )
@domElement.addEventListener( 'keyup', bind( this, @onKeyUp ), false )

function bind( scope, fn ) {

return function () {

fn.apply( scope, arguments )

}

}

}
