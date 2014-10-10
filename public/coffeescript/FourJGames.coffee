
fs = require "fs"

FourJGames =
  readJSONFile: (filename) ->
    jsonFile = null
    if fs.existsSync filename
      jsonFile = fs.readFileSync filename, "utf8"
      try
        jsonFile = JSON.parse jsonFile
      catch ex
        console.log "JSON parse error " + ex
    return jsonFile

module.exports = FourJGames