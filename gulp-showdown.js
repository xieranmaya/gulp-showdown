var gutil = require('gulp-util')
var through = require('through2')
var Showdown = require('showdown')

function gulpShowdown(options) {
  
    var converter = new Showdown.Converter(options)

    return through.obj(function (file, encoding, cb) {
        var fileText = file.contents.toString()

        var fileHtml = converter.makeHtml(fileText)

        file.contents = new Buffer(fileHtml)

        file.path = gutil.replaceExtension(file.path, '.html')

        this.push(file)

        cb(null)
    })
}

module.exports = gulpShowdown
