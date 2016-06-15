

weatherEvent     = [ "Clear", "Partly Cloudy", "Cloudy", "Rain", "Snow", "Fog", "Storm", "Blizzard" ]
weatherTurbulence = [ "None", "Light", "Moderate", "Severe" ]

weatherDefaults =
    visibility: "50mi"
    windDirection: 0
    windVelocity:  0
    windGusts:     0
    turbulence:    weatherTurbulence["None"]
    oat:           75
    event:         weatherEvent["Clear"]
    timeOfDay:     1400

class Weather
    constructor: (overrides) ->
        @settings = weatherDefaults


if !window.flightSim2?
    window.flightSim2 = {}

window.flightSim2.initWeather = (overrides) ->
    weather = new Weather()
    return weather



