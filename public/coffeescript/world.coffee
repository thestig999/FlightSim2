# world.coffee
# Author: Jason Grant
# Date: 10/10/2014

class World
    constructor: (@weather) ->
        @scene = new THREE.Scene()
        @clock = new THREE.Clock()

        @width = window.innerWidth
        @height = window.innerHeight
        @aspect = @width / @height
        @unitSize = 250

        @camera = new THREE.PerspectiveCamera( 60, @aspect, 1, 10000 ) # FOV, @aspect, near, far
        @camera.position.y = @unitSize * .2
        @scene.add @camera
        @scene.fog = new THREE.FogExp2(0xD6F1FF, 0.0005) # color, density

        @setupScene()

        # Handle drawing as WebGL (faster than Canvas but less supported)
        @renderer = new THREE.WebGLRenderer()
        @renderer.setSize @width, @height

        # Add the canvas to the document
        renderer.domElement.style.backgroundColor = '#D6F1FF' # easier to see
        document.body.appendChild renderer.domElement

    addAirplane: (airplane) =>
        @airplane = airplane

    animate: =>
        if runAnim
            requestAnimationFrame animate
        @render()

    render: =>
        delta = @clock.getDelta()
        if @airplane?
            @airplane.update delta

    setupScene: =>
        @unitSize = 250
        units = 10

        geometry = new THREE.CubeGeometry units * @unitSize, 10, units * @unitSize
        material = new THREE.MeshLambertMaterial({color: 0xEDCBA0}) #,/*map: THREE.ImageUtils.loadTexture('images/floor-1.jpg')*/}))
        floor = new THREE.Mesh geometry, material
        @scene.add floor

        directionalLight1 = new THREE.DirectionalLight( 0xF7EFBE, 0.7 )
        directionalLight1.position.set( 0.5, 1, 0.5 )
        @scene.add( directionalLight1 )
        directionalLight2 = new THREE.DirectionalLight( 0xF7EFBE, 0.5 )
        directionalLight2.position.set( -0.5, -1, -0.5 )
        scene.add( directionalLight2 )

    resize: =>
        @width = window.innerWidth
        @height = window.innerHeight
        @aspect = @width / @height
        if @camera
            @camera.aspect = @aspect
        @camera.updateProjectionMatrix()

        if @renderer
            @renderer.setSize @width, @height

