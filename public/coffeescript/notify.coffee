# notify.coffee
# Author: Jason Grant
# Date: 8/21/2014
#
# Notifies the user that a recipe clipping is in progress and has been recorded.

class Notify
    constructor: (@options, @jQuery) ->
        @closed  = false
        @showing = false
        @shown   = false

        # Define default options that the user will override in the passed options parameter,
        # User should at least override type and text.
        @notifyDefaults = {
            layout      : 'top',
            theme       : 'emealsTheme',
            type        : 'adding',
            text        : 'Recipe Clipper',
            template    : '<div class="emealsNotifyMessage"><div class="emealsNotifyLogo"></div><div class="emealsNotifySpin"></div><div class="emealsNotifyCheck"></div><div class="emealsNotifyWarn"></div><div class="emealsNotifyText"></div></div>',
            animation   : {
                open  : {height: 'toggle'},
                close : {height: 'toggle'},
                easing: 'swing',
                speed : 500
            }
            timeout     : false,
            callback    : {
                onShow: ()-> console.log "Showing emeals notification #{options.type}"
                afterShow: () -> console.log "Emeals notification is showing #{options.type}"
                onClose: ()-> console.log "Closing emeals notification #{options.type}"
                afterClose: ()-> console.log "Closed emeals notification #{options.type}"
                onCloseClick: ()-> console.log "Clicked on emeals notification #{options.type}"
            }
            buttons     : false
        }

        # Allow the user's options to override the default options
        @options = @jQuery.extend {}, @notifyDefaults, options

        @self = this

        # We will define a layout that allows the message to appear across the top of the page
        @options.layout = {
            options: {}
            container: {
                object: '<ul id="emeals_notify_top_layout_container" />'
                selector: 'ul#emeals_notify_top_layout_container'
            }
            parent: {
                object: '<li />'
                selector: 'li',
                css: {}
            }
            css: { display: 'none' }
            addClass: ''
        }

        # Create a unique identifier for this message notification
        @options.id = 'emealsNotify_' + (new Date().getTime() * Math.floor(Math.random() * 1000000));

        # Build the emealsNotify dom initial structure
        @build()

    build: =>
        # Generating notification bar
        @bar = @jQuery('<div class="emealsNotifyBar emealsNotify_type_' + @options.type + '"></div>').attr('id', @options.id)
        @bar.append(@options.template).find('.emealsNotifyText').html(@options.text)

        if @options.layout.parent.object isnt null
            @bar = @jQuery(@options.layout.parent.object).css(@options.layout.parent.css).append(@bar)

        @message = @bar.find '.emealsNotifyMessage'
        @logo = @bar.find '.emealsNotifyLogo'
        @spin = @bar.find '.emealsNotifySpin'
        @warn  = @bar.find '.emealsNotifyWarn'
        @check = @bar.find '.emealsNotifyCheck'
        @jQuerytext  = @bar.find '.emealsNotifyText'

    style: =>
        switch @options.type
            when "adding"
                @bar.css({backgroundColor: '#8fc549', borderColor: '#8fc549', color: '#ffffff'})
                @spin.css({display:'inline-block'})
                @warn.css({display:'none'})
                @check.css({display: 'none'})
            when "added"
                @bar.css({backgroundColor: '#8fc549', borderColor: '#8fc549', color: '#ffffff'})
                @spin.css({display:'none'})
                @warn.css({display:'none'})
                @check.css({display: 'inline-block'})
            when "error"
                @bar.css({backgroundColor: '#c90505', borderColor: '#c90505', color: '#ffffff', borderBottom: '2px solid #c90505', borderLeft: '2px solid #c90505', borderRight: '2px solid #c90505'})
                @spin.css({display:'none'})
                @warn.css({display:'inline-block'})
                @check.css({display: 'none'})
            else
                @bar.css({backgroundColor: '#8fc549', borderColor: '#8fc549', color: '#ffffff'})
                @spin.css({display:'none'})
                @warn.css({display:'none'})
                @check.css({display: 'none'})

    show: =>
        @self = this

        @jQuery(@options.layout.container.selector).append(@bar)
        @style()
        @bar.css(@options.layout.css || {})
        @showing = true;
        @bar.animate( @options.animation.open, @options.animation.speed, @options.animation.easing, () =>

            # call our callback and let them know that we are showing the notification
            if @self.options.callback.afterShow
                @self.options.callback.afterShow.apply @self
            @self.showing = false
            @self.shown = true
        )

        # If we have a timeout option
        if @options.timeout
            @bar.delay( @options.timeout ).promise().done( ()=>
                @self.close()
            )

    close: =>
        if @closed
            return

        if @bar and @bar.hasClass('i-am-closing-now')
            return

        @self = this

        @bar.addClass 'i-am-closing-now'
        if @options.callback.onClose
            @options.callback.onClose.apply(this)

        console.log "closing via animate"

        @bar.animate( @options.animation.close, @options.animation.speed, @options.animation.easing, ()=>

            # call our callback if available and let them know the notification has closed
            if @self.options.callback.afterClose
                @self.options.callback.afterClose.apply(@self)

        )

        console.log "after animate"

        setTimeout @removeBar, 1000

    removeBar: =>
        # Make sure self.bar has not been removed before attempting to remove it
        if typeof @bar isnt 'undefined' and @bar isnt null
            @bar.remove()
            @bar = null
            @closed = true


    setTimeoutForClose: (time) =>
        console.log "setTimeout"
        if !@closed
            console.log "not closed"
            @self = this
            setTimeout @close, time

if window?
    window.eMealsNotify = {}
    window.eMealsNotify.notify = (options) ->
        notification = new Notify(options, window.jQuery)

        # Where is the container?
        selector = 'ul#emeals_notify_top_layout_container'
        container = '<ul id="emeals_notify_top_layout_container" />'

        if window.jQuery(selector).length is 0
            window.jQuery('body').append(container).addClass('i-am-new')
        else
            window.jQuery(selector).removeClass('i-am-new')

        notification.show()
        return notification
