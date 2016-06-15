


class Session
    constructor: ->
        @mode =
            Landed:  0
            TakeOff: 1
            Landing: 2
            Flying:  3
            Crash:   4

        @lift = 0
        @drag = 0

    update: (keyMap, airplaneSettings, navigationSettings) =>







if !window.flightSim2?
    window.flightSim2 = {}

window.flightSim2.initSession = () ->
    session = new Session
    return session




