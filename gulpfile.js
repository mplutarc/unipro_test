let gulp = require('gulp');
let less = require('gulp-less');
let rename = require('gulp-rename');
let autoprefix = require('gulp-autoprefixer');
let sourcemaps = require('gulp-sourcemaps');
let browsersync = require('browser-sync').create();

function style(done) {
	gulp.src('./less/**/*.less')
		.pipe(sourcemaps.init())
		.pipe(less({
			errorLogToConsole: true
		}))
		.on('error', console.error.bind(console))
		.pipe(autoprefix({
			cascade: false
		}))
		.pipe(rename({suffix: ".min"}))
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest('./css/'))
		.pipe(browsersync.stream());
	done();
}

function browserSync(done) {
	browsersync.init({
		server: {
			baseDir: './'
		},
		port: 3000
	});
	done();
}

function browserReload(done) {
	browsersync.reload();
	done();
}

function watch(){
	gulp.watch('./less/**/*', style);
	gulp.watch('./**/*.html', browserReload);
	gulp.watch('./**/*.js', browserReload);
}

gulp.task('default', gulp.parallel(browserSync, watch));