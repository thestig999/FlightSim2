# game.coffee
# Author: Jason Grant
# Date: 10/10/2014

class FlightSim2
    constructor: (container) ->
        @weather = new Weather {}
        @world = new World @weather
#        @airplane = new Airplane {}, @world

    start: =>
        @world.animate()

flightSim2 = null

$(document).ready ->
    flightSim2 = new FlightSim2()
    flightSim2.start()



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