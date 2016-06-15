# world.coffee
# Author: Jason Grant
# Date: 10/10/2014

class World
    constructor: (@weather) ->
        @init()
#        @scene = new THREE.Scene()
#        @clock = new THREE.Clock()
#
#        @width = window.innerWidth
#        @height = window.innerHeight
#        @aspect = @width / @height
#        @unitSize = 250
#
#        @camera = new THREE.PerspectiveCamera( 60, @aspect, 1, 10000 ) # FOV, @aspect, near, far
#        @camera.position.y = @unitSize * .2
#        @scene.add @camera
#        @scene.fog = new THREE.FogExp2(0xD6F1FF, 0.0005) # color, density
#
#        @setupScene()
#
#        # Handle drawing as WebGL (faster than Canvas but less supported)
#        @renderer = new THREE.WebGLRenderer()
#        @renderer.setSize @width, @height
#
#        # Add the canvas to the document
#        @renderer.domElement.style.backgroundColor = '#D6F1FF' # easier to see
#        document.body.appendChild @renderer.domElement

        @runAnim = true

    init: =>
        @clock = new THREE.Clock()
        @container = document.getElementById 'world'

        #        @worldWidth = window.innerWidth
        #        @worldHeight = window.innerHeight
        @worldWidth = 1024
        @worldHeight = 568
        @aspect = @worldWidth / @worldHeight

        @camera = new THREE.PerspectiveCamera 30, @aspect, 1, 5000
        @camera.position.set 0, 0, 0


        rad = 30 * Math.PI / 180
        @camera.rotateOnAxis(new THREE.Vector3(0, 0, 1), rad)


        @scene = new THREE.Scene()

        @scene.fog = new THREE.Fog 0xffffff, 1, 5000
        @scene.fog.color.setHSL( 0.6, 0, 1 );

        @hemiLight = new THREE.HemisphereLight 0xffffff, 0xffffff, 0.6
        @hemiLight.color.setHSL 0.6, 1, 0.6
        @hemiLight.groundColor.setHSL 0.095, 1, 0.75
        @hemiLight.position.set 0, 500, 0
        @scene.add @hemiLight

        @dirLight = new THREE.DirectionalLight 0xffffff, 1
        @dirLight.color.setHSL 0.1, 1, 0.95
        @dirLight.position.set( -1, 1.75, 1 );
        @dirLight.position.multiplyScalar 50
        @scene.add @dirLight

        @dirLight.castShadow = true
        @dirLight.shadowMapWidth = 2048
        @dirLight.shadowMapHeight = 2048;

        d = 50;

        @dirLight.shadowCameraLeft = -d
        @dirLight.shadowCameraRight = d
        @dirLight.shadowCameraTop = d
        @dirLight.shadowCameraBottom = -d
        @dirLight.shadowCameraFar = 3500
        @dirLight.shadowBias = -0.0001
        @dirLight.shadowDarkness = 0.35

        @groundGeo = new THREE.PlaneBufferGeometry 10000, 10000
        @groundMat = new THREE.MeshPhongMaterial { ambient: 0xffffff, color: 0xffffff, specular: 0x050505 }
        @groundMat.color.setHSL 0.095, 1, 0.75

        @ground = new THREE.Mesh @groundGeo, @groundMat
        @ground.rotation.x = -Math.PI/2
        @ground.position.y = -33
        @scene.add @ground

        @ground.receiveShadow = true


        @geometry = new THREE.BoxGeometry( 100, 100, 100 )
        @material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } )
        @cube = new THREE.Mesh( @geometry, @material )
        @scene.add( @cube )

        @vertexShader = document.getElementById( 'vertexShader' ).textContent
        @fragmentShader = document.getElementById( 'fragmentShader' ).textContent
        @uniforms =
            topColor: 	 { type: "c", value: new THREE.Color( 0x0077ff ) }
            bottomColor: { type: "c", value: new THREE.Color( 0xffffff ) }
            offset:		 { type: "f", value: 33 }
            exponent:	 { type: "f", value: 0.6 }

        @uniforms.topColor.value.copy @hemiLight.color

        @scene.fog.color.copy @uniforms.bottomColor.value

        @skyGeo = new THREE.SphereGeometry 4000, 32, 15
        skyParams =
            vertexShader: @vertexShader
            fragmentShader: @fragmentShader
            uniforms: @uniforms
            side: THREE.BackSide

        @skyMat = new THREE.ShaderMaterial skyParams

        @sky = new THREE.Mesh @skyGeo, @skyMat
        @scene.add @sky

        @renderer = new THREE.WebGLRenderer { antialias: true }
        @renderer.setSize @worldWidth, @worldHeight
        @container.appendChild @renderer.domElement
        @renderer.setClearColor @scene.fog.color, 1

        @renderer.gammaInput = true
        @renderer.gammaOutput = true

        @renderer.shadowMapEnabled = true
        @renderer.shadowMapCullFace = THREE.CullFaceBack

    addAirplane: (airplane) =>
        @airplane = airplane

    animate: =>
        if @runAnim
            requestAnimationFrame @animate
        @render()

    render: =>
        delta = @clock.getDelta()
        if @airplane?
            @airplane.update delta

        @renderer.render @scene, @camera

    setupScene: =>
        @unitSize = 250
        units = 10

        geometry = new THREE.CubeGeometry units * @unitSize, 10, units * @unitSize
        material = new THREE.MeshLambertMaterial {color: 0xEDCBA0, map: THREE.ImageUtils.loadTexture('images/floor-1.jpg') }
        floor = new THREE.Mesh geometry, material
        @scene.add floor

        directionalLight1 = new THREE.DirectionalLight( 0xF7EFBE, 0.7 )
        directionalLight1.position.set( 0.5, 1, 0.5 )
        @scene.add( directionalLight1 )
        directionalLight2 = new THREE.DirectionalLight( 0xF7EFBE, 0.5 )
        directionalLight2.position.set( -0.5, -1, -0.5 )
        @scene.add( directionalLight2 )

    resize: =>
        @width = window.innerWidth
        @height = window.innerHeight
        @aspect = @width / @height
        if @camera
            @camera.aspect = @aspect
        @camera.updateProjectionMatrix()

        if @renderer
            @renderer.setSize @width, @height


if !window.flightSim2?
    window.flightSim2 = {}

window.flightSim2.initWorld = (weather) ->
    world = new World weather
    return world
