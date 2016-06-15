# game.coffee
# Author: Jason Grant
# Date: 10/10/2014

class FlightSim2
    constructor: (container) ->
#        @weather = new Weather {}
        @world = window.flightSim2.initWorld null
        @airplane = window.flightSim2.initAirplane {}, @world

#        window.addEventListener 'resize', onWindowResize, false
#        document.addEventListener 'keydown', onKeyDown, false

    start: =>
        console.log "________________"
        console.log "| FLIGHTSIM II |"
        console.log "________________"
        console.log "by Jason Grant"
        console.log "Copyright 2014"
        console.log "All rights reserved."
        console.log "Ver 02.00.00"
        @world.animate()
        @airplane.start()

flightSim2 = null

$(document).ready ->
    flightSim2 = new FlightSim2()
    flightSim2.start()

#$(window).resize ()->
#    flightSim2.world.resize()
#    flightSim2.airplane.resize()
#

#
#cockpit = new Cockpit()
#
#window.FlightSim2.Cockpit = {}
#
#window.FourJGames.Cockpit.reloadWidget = () ->
#    cockpit.reloadWidget()
#
#window.FourJGames.Cockpit.resize = () ->
#    cockpit.resize()
#
#window.addEventListener 'load', window.FourJGames.Cockpit.reloadWidget
#
#window.onresize = (event) ->
#    window.FourJGames.Cockpit.resize()

#