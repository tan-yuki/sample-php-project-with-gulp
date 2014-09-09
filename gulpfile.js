var gulp        = require('gulp'),
    watch       = require('gulp-watch'),
    _           = require('underscore'),
    origPhpunit = require('gulp-phpunit'),
    filter      = require('gulp-filter');

// phpunit filepath
var phpunitPath = './vendor/bin/phpunit';

/**
 * wrapper for phpunit task
 */
var phpunit = function(options) {
  return origPhpunit(phpunitPath, _.extend({
    configurationFile: './phpunit.xml'
  }, options));
}

var filterChanged = filter(function(file) {
  return file.event === 'changed';
});

gulp.task('watch', function() {
  watch('tests/Hoge/Test/**/*.php', function(files) {
    return files
        .pipe(filterChanged)
        .pipe(phpunit());
  });
});

gulp.task('phpunit', function() {
  gulp.src('./tests/Hoge/Test/**/*.php').pipe(phpunit());
});


