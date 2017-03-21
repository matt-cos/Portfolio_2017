'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var cssnano = require('gulp-cssnano');

gulp.task('workflow', function () {
  gulp.src('./src/sass/**/*.scss')
  // Insert tasks here
  .pipe(gulp.dest('./dist/css/'))
});