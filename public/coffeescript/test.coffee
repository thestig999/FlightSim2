# Name:   test.coffee
# Author: Jason Grant
# Date:   6/11/2014
#
# This file provides web client access to the emeals web services.
# It can call the web service APIs and validate their JSON for use in automated testing

assert  = require 'assert'
moment  = require 'moment'
hash    = require './emeals_modules/hash.coffee'
request = require 'request'
zlib    = require "zlib"
config  = require "./config"
fs      = require "fs"
report  = require "./report"

verbose = config.verbose

usePastTimestamp = false
oneDay = 60 * 60 * 24 * 1000
numDaysAheadOrBehind = 1

exports.apiTest =
    general: ( method, url, headers, body, cb ) ->
        console.log "Making api call to #{url}" if verbose
        console.log JSON.stringify headers if verbose
        console.log JSON.stringify body if verbose
        call =
            method: method,
            url: (url||''),
            json: body || {},
            headers:  headers || {}
            timeout: 900000

        request call, cb

    getSite: (url, cb) ->
        request url, cb

    assertStatus: (code) ->
        return (res ) ->
            assert.equal res.statusCode, code

    assertJSONHead: ->
        return (res ) ->
            assert.equal res.headers['content-type'], 'application/json; charset=utf-8'

    isJSON: (json) ->
        try
            JSON.parse json
        catch ex
            console.log "JSON parse error " + ex
            return false
        return true

    isValidJSON: ( expected, actual ) ->
        expectedAsString  = JSON.stringify( expected )
        actualAsString    = JSON.stringify( actual )
        console.log "Comparing JSON..." if verbose
        console.log "expected.=." + expectedAsString if verbose
        console.log "actual...=." +  actualAsString if verbose

        if expected? and actual?
            x1 = JSON.parse( expectedAsString )
            x2 = JSON.parse( actualAsString )

            # check to see if all params in x1 are in x2
            param = null
            for param of x1
                return false if typeof (x2[param]) is 'undefined'

            # check that the values of x1 are equal to the values of x2 for a given param
            for param of x1
                if x1[param]
                    switch typeof (x1[param])
                        when 'object'
                            if x1[param].length is undefined
                                if x1[param].jsonEquals?
                                    return false unless x1[param].jsonEquals(x2[param])
                                else
                                    # This is not a json object.  We have to do the comparison ourselves
                                     console.log "#{x1[param]} is not a json object."
#                                    obj1 = x1[param]
#                                    obj2 = x2[param]
#                                    keys = Object.keys(obj1)
#                                    for key in keys
                            else
                                s1 = JSON.stringify x1[param]
                                s2 = JSON.stringify x2[param]
                                return false unless s1 is s2
                        when 'function'
                            return false if typeof (x2[param]) is 'undefined' or (param isnt 'equals' and x1[param].toString() isnt x2[param].toString())
                        else
                            return false unless x1[param] is x2[param]
                else
                    return false if x2[param]
            return true
        else
            return false

    jsonDifferences: ( expected, actual ) ->
        diffs = []
        if expected? and actual?
            x1 = JSON.parse( JSON.stringify( expected ) )
            x2 = JSON.parse( JSON.stringify( actual ) )

            param = null
            for param of x1
                if typeof (x2[param]) is 'undefined'
                    diffs.push "Cannot find parameter #{param}"

            for param of x1
                if x1[param]
                    switch typeof (x1[param])
                        when 'object'
                            if x1[param].length is undefined
                                if x1[param].jsonEquals(x2[param])
                                    diffs.push "Parameter #{param} is not equal"
                            else
                                s1 = JSON.stringify x1[param]
                                s2 = JSON.stringify x2[param]
                                if s1 isnt s2
                                    diffs.push "Parameter #{param} is not equal"
                        when 'function'
                            if typeof (x2[param]) is 'undefined' or (param isnt 'equals' and x1[param].toString() isnt x2[param].toString())
                                diffs.push "functions are not the same for #{param}"
                        else
                            if x1[param] isnt x2[param]
                                diffs.push "Parameter #{param} is not equal"

                else
                    if x2[param]
                        diffs.push "Problem with parameter #{param} in actual"
        else
            diffs.push "Cannot perform json difference invalid arguments"

        return diffs

    readJSONFile: (pathUnderTheStig) ->
        jsonFile = null
        filename = "#{__dirname}/#{pathUnderTheStig}"
        if fs.existsSync filename
            jsonFile = fs.readFileSync filename, "utf8"
            try
                jsonFile = JSON.parse jsonFile
            catch ex
                console.log "JSON parse error " + ex
        return jsonFile

    readChildFile: (pathUnderTheStig) ->
        childFile = null
        filename = "#{__dirname}/#{pathUnderTheStig}"
        if fs.existsSync filename
            childFile = fs.readFileSync filename, "utf8"
        return childFile

    buildHeader: (body, shouldGzip) ->
        timestamp =  moment().format()
        header =
            'Content-Type': 'application/json'
            'Date': timestamp
            'Authorization': this.makeAuthorization( body, timestamp )
        if shouldGzip
            header["Accept-Encoding"] = "gzip"
        return header

    buildBody: (user) ->
        body =
            username: user.username
            password: user.password
        return body

    assertValidUserLogin: ( user, webResult ) ->
        expectedJson =
            id: user.id
            memberId: user.memberId
            key: user.key
            secret: user.secret

        if this.isValidJSON( expectedJson, webResult )
            console.log "Login for #{user.username} Successful!" if verbose
            return true

        console.log "###########  TEST FAIL! Not able to log in for #{user.username} ###########"
        return false;

    makeAuthorization: (body, timestamp) ->
        dateHeader = timestamp
        if body != null
            authorization = config.apiConfig.id + ':' + hash.hmac JSON.stringify( body ) + dateHeader, config.apiConfig.secret
        else
            authorization = config.apiConfig.id + ':' + hash.hmac dateHeader, config.apiConfig.secret
        return authorization

    createNonce: ->
        time = new Date().valueOf().toString()
        nonce = time.toString() + '.'
        for i in [0..5] by 1
            randNum = Math.floor((Math.random() * 9) + 1)
            nonce = nonce.toString() + randNum.toString()
            randNum += i
        return nonce

    randomNumber: (upto) ->
        return Math.floor((Math.random() * (upto - 1)) + 1)

    generateNumber: (digits) ->
        numberAsString = ""
        for i in [0...digits]
            numberAsString += @randomNumber(9).toString()
        return Number(numberAsString)

    randomExpirationDate: ->
        nextYear = new Date().getFullYear() + 1
        randomYear = nextYear + @randomNumber 10
        randomMonth = @randomNumber 12
        if randomMonth is 0
            randomMonth = 1
        if randomMonth < 10
            return "0" + randomMonth.toString() + "/" + randomYear.toString()
        else
            return randomMonth.toString() + "/" + randomYear.toString()

    s4: ->
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1)

    createGuid: ->
        return @s4() + @s4() + '-' + @s4() + '-' + @s4() + '-' + @s4() + '-' + @s4() + @s4() + @s4()

    sleep: (ms) ->
        currentTime = (new Date).getTime();
        wakeTime = currentTime + ms;
        Math.random() until (new Date).getTime() > wakeTime

    wait: (ms, cb) ->
        setTimeout cb, ms

    getTimestamp: ->
        if !usePastTimestamp
            return (new Date).getTime()
        else
            return @createTimestamp numDaysAheadOrBehind

    createTimestamp: (daysOff) ->
        timestamp = (new Date).getTime() + (oneDay * daysOff )
        return timestamp

    getMidnightTimestamp: ->
        timestamp = new Date()
        timestamp.setHours(0,0,0,0)
        return timestamp.getTime()

    gunzip: ( res, callback ) ->
        if res?
            chunks = [];
            res.on 'data', (chunk) ->
                chunks.push chunk

            res.on 'end', () ->
                buffer = Buffer.concat chunks
                zlib.gunzip buffer, (err, decoded) ->
                    callback err, decoded && decoded.toString()
        else
            callback "no result returned", null

    validateTest: ( testName, service, expectedJSON, err, res, body ) ->
        isValid = false
        if err?
            @testFailed testName, service, "Error in response", JSON.stringify err
        else if body?
            if Array.isArray( expectedJSON ) and Array.isArray( body )
                if @validateArray( expectedJSON, body )
                    isValid = true
                    @testPassed testName, service
            else if @isValidJSON expectedJSON, body
                @testPassed testName, service
                isValid = true
            else
                expected = "expected.=." + JSON.stringify expectedJSON
                if expected.length > 50
                    expected = expected.substring( 0, 50)
                actual   = "actual...=." + JSON.stringify body
                if actual.length > 50
                    actual = actual.substring(0, 50)
                @testFailed testName, service, "Response does not match expected", "#{expected} #{actual}"
        else if res?
            # if we get here, err was null and body was undefined, this means we haven't received a response yet
            # assume the test is valid until we can prove otherwise.
            @testStatus testName, service, 'Waiting for valid response' if verbose
            isValid = true

        return isValid

    validateArray: ( expected, body ) ->
        for item in expected
            if body.indexOf( item ) is -1
                return false
        return true

    getArrayDifferences: ( arr1, arr2 ) ->
        # returns items that are not in both arrays
        diffs = []
        for item in arr1
            if arr2.indexOf? and arr2.indexOf( item ) is -1
                diffs.push item
        for item in arr2
            if arr1.indexOf? and arr1.indexOf( item ) is -1
                diffs.push item
        return diffs

    parseURL: (url) ->
        parsed_url = {}

        if url? or url is "undefined" or url.length is 0
            return null

        protocol_i = url.indexOf '://'
        parsed_url.protocol = url.substr 0,protocol_i

        remaining_url = url.substr protocol_i + 3, url.length
        domain_i = remaining_url.indexOf '/'
        if domain_i is -1
            domain_i = remaining_url.length - 1

        parsed_url.domain = remaining_url.substr 0, domain_i
        if ( domain_i is -1 ) or ( domain_i + 1 is remaining_url.length )
            parsed_url.path = null
        else
            parsed_url.path = remaining_url.substr domain_i + 1, remaining_url.length

        domain_parts = parsed_url.domain.split '.'
        switch domain_parts.length
            when 2
                parsed_url.subdomain = null;
                parsed_url.host = domain_parts[0]
                parsed_url.tld = domain_parts[1]

            when 3
                parsed_url.subdomain = domain_parts[0]
                parsed_url.host = domain_parts[1]
                parsed_url.tld = domain_parts[2]

            when 4
                parsed_url.subdomain = domain_parts[0]
                parsed_url.host = domain_parts[1]
                parsed_url.tld = domain_parts[2] + '.' + domain_parts[3]

            else
                return null

        parsed_url.parent_domain = parsed_url.host + '.' + parsed_url.tld;
        return parsed_url

    testPassed: ( testName, service ) ->
        console.log ">>>>> #{testName} Test PASSED! <<<<<"
        report.testReport.addTestCase testName, service, true, null
        return true

    testFailed: ( testName, service, reason, details ) ->
        console.log "!!!!! #{testName} Test FAILED. #{reason} !!!!!"
        report.testReport.addTestCase testName, service, false, reason, details
        return false

    testStatus: ( testName, service, status ) ->
        console.log "----- #{testName} #{status}"
        return true




