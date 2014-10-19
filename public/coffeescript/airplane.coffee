# airplane.coffee
# Date:  10/10/2014
# Author:  Jason Grant

# This file defines the airplane

class Airplane
    constructor: (@overrides, @world) ->
        @settings =
            # The throttle regulates the amount of fuel flowing into the engine. Pressing W (full throttle) the engine
            # develops maximum power.  Press S to decrease the amount of fuel and power
            throttle:        0    # Range from 0 to 10 (full throttle

            # There are two indicators on the screen directly related to the throttle control.  Theses are the Airspeed
            # and Power indicators.  Your jet will crash due to over speed if you exceed 375 knots.
            airSpeed:        0    # Aircraft's speed in knots

            # The power indicator, labeled P and located to the left of the air speed indicator, shows the amount of
            # power developed by the engine.  When the user is holding down the W key, the vertical bar rises to the
            # top.  To decrease the power, the user should let go of the W key.  To decrease faster, the user should
            # press the S key.
            power:           0    # percent, controls the power applied to the engine(s)

            applyBreaks:  true    # enable and disable brakes
            heading:         0    # degrees, 0 is north
            rudder:         50    # 0 = full Left, 50 = center, 100 = right, defaults back to center
            flaps:           0    # 0 degrees, 10 degrees, 20 degrees, and 25 degrees
            trim:            0    # trim setting
            leftFuel:       75    # percent of fuel in left tank
            rightFuel:      35    # percent of fuel in right tank
            airspeed:        0    # Knots
            altitude:       16    # Feet above sea level
            lights: {
                navigation: false
                landing:    false
                beacon:     false
                strobe:     false
            }
            waypoint: {
                airport: ""
                distance: 0
                estimatedTime: 0
            }
            autoPilot: {
                enabled: false
                heading: 0
                speed: 0
                verticalSpeed: 0
            }
            weight: {
                leftFuelTank:  "37kg"
                rightFuelTank: "20kg"
                passengers:    "234kg"
                cargo:         "4kg"
            }

        @instruments =
            pitchValue:          0
            rollValue:           0
            turnRollSlider:      0
            rollSlider:          0
            pitch:               0
            heightSlider:        0
            directionSlider:     0
            airSpeedSlider:      0
            slipSlider:          0
            verticalSpeedSlider: 0
            yoke:                0

        @cockpit = new Cockpit @instruments
        @world.addAirplane this
        @map =
            locationX:         100
            locationY:         100
            locationZ:         100
            heading:             0

        @navigation = new Navigation world.camera, @map

        @keymap =
            arrowUp:    false   # keyboard up
            arrowDown:  false   # keyboard down
            arrowLeft:  false   # keyboard left
            arrowRight: false   # keyboard right
            W:          false   # Hat up
            S:          false   # Hat Down
            A:          false   # Hat Left
            D:          false   # Hat Right
            Space:      false   # A button
            X:          false   # X button
            B:          false   # B button
            Y:          false   # Y button
            P:          false   # Start
            ESC:        false   # Back
            G:          false   # LT
            H:          false   # RT
            T:          false   # LB
            Y:          false   # RB
            leftMouse:  false   # Primary mouse button
            rightMouse: false   # Secondary mouse button
            mouseWheel: 0       # Mouse Wheel
            mouseX:     0       # Mouse motion horizontal
            mouseY:     0       # Mouse motion verticle

    setupEventListeners: =>
        container = @world.container
        container.addEventListener 'mousemove', @onMouseMove, false
        container.addEventListener 'mousedown', @onMouseDown, false
        container.addEventListener 'mouseup', @onMouseUp, false
        container.addEventListener 'keydown', @onKeyDown, false
        container.addEventListener 'keyup', @onKeyUp, false

    onMouseDown: (event) =>
        @mouseClick event.button, true

    onMouseUp: (event) =>
        @mouseClick event.button, false

    mouseClick: (button, isDown) =>
        switch button
            when 0
                @keymap.leftMouse = isDown
            when 2
                @keymap.rightMouse = isDown
            else
                console.log "Unknown mouse click"

    onMouseMove: (event) =>
        @keymap.mouseX = event.pageX
        @keymap.mouseY = event.pageY

    onKeyDown: (event) =>
        @changeKey event.keyCode, true

    onKeyUp: (event) =>
        @changeKey event.keyCode, false

    changeKey: (keyCode, isDown) =>
        switch keyCode
            when 38 # up
                @keymap.arrowUp = isDown
            when 87 # W
                @keymap.W          = isDown
            when 37 # left
                @keymap.arrowLeft  = isDown
            when 65 # A
                @keymap.A          = isDown
            when 40 # down
                @keymap.arrowDown  = isDown
            when 83 # S
                @keymap.S          = isDown
            when 39 # right
                @keymap.arrowRight = isDown
            when 68 # D
                @keymap.D          = isDown
            when 32 # space
                @keymap.Space      = isDown
            when 66
                @keymap.B          = isDown
            when 89
                @keymap.Y          = isDown
            when 80
                @keymap.P          = isDown
            when 27
                @keymap.ESC        = isDown
            when 71
                @keymap.G          = isDown
            when 72
                @keymap.H          = isDown
            when 84
                @keymap.T          = isDown
            when 89
                @keymap.Y          = isDown
            else
                console.log "Key not found #{keyCode}"

    resize: =>
        @cockpit.resize()

    update: (delta) =>
        console.log "#{delta}"
