
# Left Joystick



# Right Joystick


class Airplane
    constructor: (override) ->
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














