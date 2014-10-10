(function() {
    var Cockpit, cockpit, model,
        _this = this;

    model = {
        airSpeed: null,
        altimeter: null,
        attitudeIndicator: null,
        headingIndicator: null,
        turnCoordinator: null,
        verticalSpeedIndicator: null
    };

    Cockpit = (function() {

        function Cockpit() {
            var _this = this;
            this.updateInstruments = function() {
                return Cockpit.prototype.updateInstruments.apply(_this, arguments);
            };
            this.airSpeedMovementHandler = function(sender, e) {
                return Cockpit.prototype.airSpeedMovementHandler.apply(_this, arguments);
            };
            this.grabAirSpeedWidgetSliders = function() {
                return Cockpit.prototype.grabAirSpeedWidgetSliders.apply(_this, arguments);
            };
            this.grabTurnCoordinatorSliders = function() {
                return Cockpit.prototype.grabTurnCoordinatorSliders.apply(_this, arguments);
            };
            this.grabAttitudeIndicatorSliders = function() {
                return Cockpit.prototype.grabAttitudeIndicatorSliders.apply(_this, arguments);
            };
            this.grabHeadingIndicatorSliders = function() {
                return Cockpit.prototype.grabHeadingIndicatorSliders.apply(_this, arguments);
            };
            this.heightMovementHandler = function(sender, e) {
                return Cockpit.prototype.heightMovementHandler.apply(_this, arguments);
            };
            this.grabAltimeterSliders = function() {
                return Cockpit.prototype.grabAltimeterSliders.apply(_this, arguments);
            };
            this.verticalSpeedChangedHandler = function(sender, e) {
                return Cockpit.prototype.verticalSpeedChangedHandler.apply(_this, arguments);
            };
            this.grabVerticalSpeedSliders = function() {
                return Cockpit.prototype.grabVerticalSpeedSliders.apply(_this, arguments);
            };
            this.reloadWidget = function() {
                return Cockpit.prototype.reloadWidget.apply(_this, arguments);
            };
            this.resize = function() {
                return Cockpit.prototype.resize.apply(_this, arguments);
            };
            this.isLoaded = function() {
                return Cockpit.prototype.isLoaded.apply(_this, arguments);
            };
            this.nextDouble = function(minValue, maxValue) {
                return Cockpit.prototype.nextDouble.apply(_this, arguments);
            };
            this.nextInt = function(minValue, maxValue) {
                return Cockpit.prototype.nextInt.apply(_this, arguments);
            };
            this.airSpeedWidget = null;
            this.airSpeedSlider = null;
            this.altimeterWidget = null;
            this.heightSlider = null;
            this.attitudeIndicatorWidget = null;
            this.pitchSlider = null;
            this.rollSlider = null;
            this.headingIndicatorWidget = null;
            this.directionSlider = null;
            this.turnCoordinatorWidget = null;
            this.turnRollSlider = null;
            this.slipSlider = null;
            this.verticalSpeedIndicatorWidget = null;
            this.verticalSpeedSlider = null;
            this.timeOutMiliseconds = 1000;
            this.pitchValue = 0;
            this.rollValue = 0;
            this.timeoutId = 0;
            this.timeOutMiliseconds = 1000;
            this.self = this;
            $.getJSON("json/model1.json", function(data) {
                return model.airSpeed = data;
            });
            $.getJSON("json/model2.json", function(data) {
                return model.altimeter = data;
            });
            $.getJSON("json/model3.json", function(data) {
                return model.attitudeIndicator = data;
            });
            $.getJSON("json/model4.json", function(data) {
                return model.headingIndicator = data;
            });
            $.getJSON("json/model5.json", function(data) {
                return model.turnCoordinator = data;
            });
            $.getJSON("json/model6.json", function(data) {
                return model.verticalSpeedIndicator = data;
            });
        }

        Cockpit.prototype.nextInt = function(minValue, maxValue) {
            return Math.floor((Math.random() * (maxValue - minValue)) + minValue);
        };

        Cockpit.prototype.nextDouble = function(minValue, maxValue) {
            return (Math.random() * (maxValue - minValue)) + minValue;
        };

        Cockpit.prototype.isLoaded = function() {
            return (model.airSpeed != null) && (model.altimeter != null) && (model.attitudeIndicator != null) && (model.headingIndicator != null) && (model.turnCoordinator != null) && (model.verticalSpeedIndicator != null);
        };

        Cockpit.prototype.resize = function() {
            if (this.isLoaded()) {
                console.log("resize()");
                this.airSpeedWidget.rescale();
                this.altimeterWidget.rescale();
                this.attitudeIndicatorWidget.rescale();
                this.headingIndicatorWidget.rescale();
                this.turnCoordinatorWidget.rescale();
                return this.verticalSpeedIndicatorWidget.rescale();
            } else {
                return console.log("not loaded");
            }
        };

        Cockpit.prototype.reloadWidget = function() {
            console.log("Attempting to reloadWidget");
            if (this.isLoaded()) {
                console.log("reloadWidget");
                this.airSpeedWidget = new PerfectWidgets.Widget("airSpeed", model.airSpeed);
                this.altimeterWidget = new PerfectWidgets.Widget("altimeter", model.altimeter);
                this.attitudeIndicatorWidget = new PerfectWidgets.Widget("attitudeIndicator", model.attitudeIndicator);
                this.headingIndicatorWidget = new PerfectWidgets.Widget("headingIndicator", model.headingIndicator);
                this.turnCoordinatorWidget = new PerfectWidgets.Widget("turnCoordinator", model.turnCoordinator);
                this.verticalSpeedIndicatorWidget = new PerfectWidgets.Widget("verticalSpeedIndicator", model.verticalSpeedIndicator);
                this.grabAttitudeIndicatorSliders();
                this.grabAltimeterSliders();
                this.grabAirSpeedWidgetSliders();
                this.grabHeadingIndicatorSliders();
                this.grabTurnCoordinatorSliders();
                this.grabVerticalSpeedSliders();
                return this.timeoutId = window.setTimeout(this.updateInstruments, this.timeOutMiliseconds);
            } else {
                return window.setTimeout(this.reloadWidget, this.timeOutMiliseconds);
            }
        };

        Cockpit.prototype.grabVerticalSpeedSliders = function() {
            this.verticalSpeedSlider = this.verticalSpeedIndicatorWidget.getByName("Slider2");
            this.verticalSpeedSlider.configureAnimation({
                "enabled": true,
                "ease": "swing",
                "duration": 20
            });
            return this.verticalSpeedSlider.addAnimationValueChangedHandler(this.verticalSpeedChangedHandler);
        };

        Cockpit.prototype.verticalSpeedChangedHandler = function(sender, e) {
            return this.verticalSpeedIndicatorWidget.getByName("Slider1").recalculate();
        };

        Cockpit.prototype.grabAltimeterSliders = function() {
            this.heightSlider = this.altimeterWidget.getByName("height");
            this.heightSlider.configureAnimation({
                "enabled": true,
                "ease": "swing",
                "duration": 500
            });
            return this.heightSlider.addAnimationValueChangedHandler(this.heightMovementHandler);
        };

        Cockpit.prototype.heightMovementHandler = function(sender, e) {
            this.altimeterWidget.getByName("Slider1").recalculate();
            return this.altimeterWidget.getByName("Slider2").recalculate();
        };

        Cockpit.prototype.grabHeadingIndicatorSliders = function() {
            this.directionSlider = this.headingIndicatorWidget.getByName("Slider1");
            return this.directionSlider.configureAnimation({
                "enabled": true,
                "ease": "swing",
                "duration": 10
            });
        };

        Cockpit.prototype.grabAttitudeIndicatorSliders = function() {
            this.pitch = this.attitudeIndicatorWidget.getByName("Pitch");
            this.rollSlider = this.attitudeIndicatorWidget.getByName("Roll");
            return this.rollSlider.configureAnimation({
                "enabled": true,
                "ease": "swing",
                "duration": 10
            });
        };

        Cockpit.prototype.grabTurnCoordinatorSliders = function() {
            this.slipSlider = this.turnCoordinatorWidget.getByName("Slider2");
            this.turnRollSlider = this.turnCoordinatorWidget.getByName("Slider1");
            return this.turnRollSlider.configureAnimation({
                "enabled": true,
                "ease": "swing",
                "duration": 2
            });
        };

        Cockpit.prototype.grabAirSpeedWidgetSliders = function() {
            this.airSpeedSlider = this.airSpeedWidget.getByName("Speed");
            this.airSpeedSlider.configureAnimation({
                "enabled": true,
                "ease": "swing",
                "duration": 20
            });
            return this.airSpeedSlider.addAnimationValueChangedHandler(this.airSpeedMovementHandler);
        };

        Cockpit.prototype.airSpeedMovementHandler = function(sender, e) {
            return this.airSpeedWidget.getByName("Slider2").recalculate();
        };

        Cockpit.prototype.updateInstruments = function() {
            var newRoll;
            clearTimeout(this.timeoutId);
            this.pitchValue = this.pitchValue + this.nextInt(-20, 20);
            newRoll = this.rollValue + this.nextInt(-30, 30);
            if (Math.abs(newRoll) < 90) {
                this.rollValue = newRoll;
            }
            this.turnRollSlider.setValue(this.rollValue);
            this.rollSlider.setValue(this.rollValue);
            this.pitch.setValue(this.pitchValue);
            this.heightSlider.setValue(this.heightSlider.getValue() + this.nextInt(-500, 500));
            this.directionSlider.setValue(this.directionSlider.getValue() + this.nextInt(-90, 90));
            this.airSpeedSlider.setValue(this.airSpeedSlider.getValue() + this.nextInt(-20, 20));
            this.slipSlider.setValue(this.nextInt(-100, 100));
            this.verticalSpeedSlider.setValue(this.verticalSpeedSlider.getValue() + this.nextDouble(-1, 1));
            return this.timeoutId = window.setTimeout(this.updateInstruments, this.timeOutMiliseconds);
        };

        return Cockpit;

    })();

    cockpit = new Cockpit();

    window.FourJGames = {};

    window.FourJGames.Cockpit = {};

    window.FourJGames.Cockpit.reloadWidget = function() {
        return cockpit.reloadWidget();
    };

    window.FourJGames.Cockpit.resize = function() {
        return cockpit.resize();
    };

    window.addEventListener('load', window.FourJGames.Cockpit.reloadWidget);

    window.onresize = function(event) {
        return window.FourJGames.Cockpit.resize();
    };

}).call(this);
