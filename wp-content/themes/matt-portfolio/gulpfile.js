var gulp = require('gulp');
var sass = require('gulp-sass');
var cssnano = require('gulp-cssnano');
var livereload = require('gulp-livereload');
var notify = require('gulp-notify');


//compile sass to css and then minify
gulp.task('sass-and-min', function () {
	return gulp.src('./dev/styles/style.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(cssnano())
		.pipe(gulp.dest('./'))
		.pipe(notify("Stylesheet updated."))
		.pipe(livereload());
});

//livereload any html edits
gulp.task('index', function() {
	return gulp.src('./index.php')
		.pipe(notify("Index updated."))
		.pipe(livereload());
});

gulp.task('watch', function () {
	livereload.listen();
	gulp.watch('./dev/styles/*.scss', ['sass-and-min'] );
	gulp.watch('./index.php', ['index'] );
});