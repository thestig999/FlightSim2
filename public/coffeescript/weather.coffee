

weatherEvents     = [ "Clear", "Partly Cloudy", "Cloudy", "Rain", "Snow", "Fog", "Storm", "Blizzard" ]
weatherTurbulence = [ "None", "Light", "Moderate", "Severe" ]

weatherDefaults =
    visibility: "50km"

class Weather
    constructor: ( @visibility, @windDirection, @windVelocity, @windGusts, @turbulence, @oat, @event, @timeOfDay ) ->






