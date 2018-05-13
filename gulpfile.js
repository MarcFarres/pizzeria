var gulp = require('gulp');
var runSequence = require('run-sequence');

// Get tasks from gulp-tasks directory
require('require-dir')('gulp-config');

// Get tasks from gulp-tasks directory
require('require-dir')('gulp-tasks');

gulp.task('default',() => {
	runSequence(
		'clean',
		'js',
		'compileStyles', 
		'images'
		);
});