# Showdown for Gulp.js

## Installation

Install package with NPM and add it to your development dependencies:

`npm install --save-dev gulp-showdown`

## Usage

```javascript
var gulpShowdown = require('gulp-showdown');

gulp.task('md2html', function() {
  gulp.src('src/*.md')
    .pipe(gulpShowdown())
    .pipe(gulp.dest('src/html'))
});
```
