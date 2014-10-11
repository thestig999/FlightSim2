# game.coffee
# Author: Jason Grant
# Date: 10/10/2014

class FlightSim2
    constructor: (container) ->
        @world = new World()
        @airplane = new Airplane {}, @world

    start: =>
        @world.animate()

flightSim2 = null

$(document).ready ->
    flightSim2 = new FlightSim2()








flightSim2.start()





function bind( scope, fn ) {

return function () {

fn.apply( scope, arguments )

}

