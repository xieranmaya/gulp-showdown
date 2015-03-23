var gutil = require('gulp-util')
var through = require('through2')
var Showdown = require('showdown')
var converter = new Showdown.converter({
  extensions: ['table']
})

function gulpShowdown() {
  return through.obj(function(file, encoding, cb) {
    var fileText = file.contents.toString()

    var fileHtml = converter.makeHtml(fileText)

    file.contents = new Buffer(fileHtml)

    file.path = gutil.replaceExtension(file.path, '.html')

    this.push(file)

    cb(null, file)
  })
}

module.exports = gulpShowdown
