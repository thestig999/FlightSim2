# cockpit.coffee
# Author: Jason Grant
# Date: 10/4/2014

model =
    airSpeed: null
    altimeter: null
    attitudeIndicator: null
    headingIndicator: null
    turnCoordinator: null
    verticalSpeedIndicator: null

class Cockpit
    constructor: ->
        @airSpeedWidget = null
        @airSpeedSlider = null
        @altimeterWidget = null
        @heightSlider = null

        @attitudeIndicatorWidget = null
        @pitchSlider = null
        @rollSlider = null

        @headingIndicatorWidget = null
        @directionSlider = null

        @turnCoordinatorWidget = null
        @turnRollSlider = null
        @slipSlider = null

        @verticalSpeedIndicatorWidget = null
        @verticalSpeedSlider = null
        @timeOutMiliseconds = 1000

        @pitchValue = 0
        @rollValue = 0

        @timeoutId = 0
        @timeOutMiliseconds = 1000;

        @self = this

        $.getJSON "json/model1.json", ( data ) =>
            model.airSpeed = data

        $.getJSON "json/model2.json", ( data ) =>
            model.altimeter = data

        $.getJSON "json/model3.json", ( data ) =>
            model.attitudeIndicator = data

        $.getJSON "json/model4.json", ( data ) =>
            model.headingIndicator = data

        $.getJSON "json/model5.json", ( data ) =>
            model.turnCoordinator = data

        $.getJSON "json/model6.json", ( data ) =>
            model.verticalSpeedIndicator = data

    nextInt: (minValue,maxValue) =>
        return Math.floor((Math.random()*(maxValue-minValue))+minValue)

    nextDouble: (minValue,maxValue) =>
        return ((Math.random()*(maxValue-minValue))+minValue)

    isLoaded: =>
        return model.airSpeed? and model.altimeter? and model.attitudeIndicator? and model.headingIndicator? and model.turnCoordinator? and model.verticalSpeedIndicator?
    resize: =>
        if @isLoaded()
            console.log "resize()"
            @airSpeedWidget.rescale()
            @altimeterWidget.rescale()
            @attitudeIndicatorWidget.rescale()
            @headingIndicatorWidget.rescale()
            @turnCoordinatorWidget.rescale()
            @verticalSpeedIndicatorWidget.rescale()
        else
            console.log "not loaded"

    reloadWidget: =>
        console.log "Attempting to reloadWidget"
        if @isLoaded()
            console.log "reloadWidget"
            @airSpeedWidget = new PerfectWidgets.Widget "airSpeed", model.airSpeed
            @altimeterWidget = new PerfectWidgets.Widget "altimeter", model.altimeter
            @attitudeIndicatorWidget = new PerfectWidgets.Widget "attitudeIndicator", model.attitudeIndicator
            @headingIndicatorWidget = new PerfectWidgets.Widget "headingIndicator", model.headingIndicator
            @turnCoordinatorWidget = new PerfectWidgets.Widget "turnCoordinator", model.turnCoordinator
            @verticalSpeedIndicatorWidget = new PerfectWidgets.Widget "verticalSpeedIndicator", model.verticalSpeedIndicator

            @grabAttitudeIndicatorSliders()
            @grabAltimeterSliders()
            @grabAirSpeedWidgetSliders()
            @grabHeadingIndicatorSliders()
            @grabTurnCoordinatorSliders()
            @grabVerticalSpeedSliders()
            @timeoutId = window.setTimeout @updateInstruments, @timeOutMiliseconds
        else
            window.setTimeout @reloadWidget, @timeOutMiliseconds

    grabVerticalSpeedSliders: =>
        @verticalSpeedSlider = @verticalSpeedIndicatorWidget.getByName "Slider2"
        @verticalSpeedSlider.configureAnimation { "enabled": true, "ease": "swing", "duration": 20 }
        @verticalSpeedSlider.addAnimationValueChangedHandler @verticalSpeedChangedHandler

    verticalSpeedChangedHandler: (sender, e) =>
        @verticalSpeedIndicatorWidget.getByName("Slider1").recalculate()

    grabAltimeterSliders: =>
        @heightSlider = @altimeterWidget.getByName "height"
        @heightSlider.configureAnimation { "enabled": true, "ease": "swing", "duration": 500 }
        @heightSlider.addAnimationValueChangedHandler @heightMovementHandler

    heightMovementHandler: (sender, e) =>
        @altimeterWidget.getByName("Slider1").recalculate()
        @altimeterWidget.getByName("Slider2").recalculate()

    grabHeadingIndicatorSliders: =>
        @directionSlider = @headingIndicatorWidget.getByName("Slider1")
        @directionSlider.configureAnimation { "enabled": true, "ease": "swing", "duration": 10 }

    grabAttitudeIndicatorSliders: =>
        @pitch = @attitudeIndicatorWidget.getByName "Pitch"
        @rollSlider = @attitudeIndicatorWidget.getByName "Roll"
        @rollSlider.configureAnimation { "enabled": true, "ease": "swing", "duration": 10 }

    grabTurnCoordinatorSliders: =>
        @slipSlider = @turnCoordinatorWidget.getByName "Slider2"
        @turnRollSlider = @turnCoordinatorWidget.getByName "Slider1"
        @turnRollSlider.configureAnimation { "enabled": true, "ease": "swing", "duration": 2 }

    grabAirSpeedWidgetSliders: =>
        @airSpeedSlider = @airSpeedWidget.getByName "Speed"
        @airSpeedSlider.configureAnimation { "enabled": true, "ease": "swing", "duration": 20 }
        @airSpeedSlider.addAnimationValueChangedHandler @airSpeedMovementHandler

    airSpeedMovementHandler:  (sender, e) =>
        @airSpeedWidget.getByName("Slider2").recalculate()

    updateInstruments: =>
        clearTimeout @timeoutId
        @pitchValue = @pitchValue + @nextInt -20,20
        newRoll = @rollValue + @nextInt -30,30
        if Math.abs(newRoll) < 90
          @rollValue = newRoll

        @turnRollSlider.setValue @rollValue
        @rollSlider.setValue @rollValue
        @pitch.setValue @pitchValue

        @heightSlider.setValue @heightSlider.getValue() + @nextInt(-500,500)
        @directionSlider.setValue @directionSlider.getValue() + @nextInt(-90,90)
        @airSpeedSlider.setValue @airSpeedSlider.getValue() + @nextInt(-20,20)
        @slipSlider.setValue @nextInt(-100,100)
        @verticalSpeedSlider.setValue @verticalSpeedSlider.getValue() + @nextDouble(-1,1)
        @timeoutId = window.setTimeout @updateInstruments, @timeOutMiliseconds

cockpit = new Cockpit()

window.FourJGames = {}
window.FourJGames.Cockpit = {}

window.FourJGames.Cockpit.reloadWidget = () ->
    cockpit.reloadWidget()

window.FourJGames.Cockpit.resize = () ->
    cockpit.resize()


window.addEventListener 'load', window.FourJGames.Cockpit.reloadWidget

window.onresize = (event) ->
    window.FourJGames.Cockpit.resize()


# vertical progress
$('.skill').on('click', 'button', function(){
    var skillBar = $(this).siblings().find('.inner');
    var skillVal = skillBar.attr("data-progress");
    $(skillBar).animate({
        height: skillVal
    }, 1500);
});
