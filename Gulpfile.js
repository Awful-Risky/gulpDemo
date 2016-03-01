var gulp = require('gulp');
var slurpy = require('gulp-concat');
var please = require('gulp-uglify');
var tinyStyles = require('gulp-minify-css');

//Define tasks for gulp to run

//The 'default' task runs when gulp is called at the command line
// gulp.task('default', function(){
// 	console.log('Gulp')
// });


gulp.task('miniCSS', function(){
	gulp.src('./css/src/**/*.css')
		.pipe(slurpy('mini.css'))
		.pipe(tinyStyles())
		.pipe(gulp.dest('./css/dist/'))
	// console.log('Sip')
});


gulp.task('miniJS', function(){
	// console.log('Drink')
	gulp.src('./js/src/**/*.js')
		.pipe(slurpy('mini.js'))
		.pipe(please())
		.pipe(gulp.dest('./js/dist/'))
});

gulp.task('default', function(){
	console.log('Gulp');
	gulp.watch('./css/src/**/*.css', ['miniCSS'])
	gulp.watch('./js/src/**/*.js', ['miniJS'])

});
