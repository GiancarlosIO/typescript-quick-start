var gulp = require('gulp');
var browserify = require('browserify');
var sourcemaps = require('gulp-sourcemaps');
var buffer = require('vinyl-buffer');
var source = require('vinyl-source-stream');
var watchify = require('watchify');
var gutil = require('gulp-util');
var tsify = require("tsify");
var paths = {
  pages: ['src/*.html']
}
//var ts = require('gulp-typescript');
//var tsProject = ts.createProject('tsconfig.json');

var watchedBrowserify = watchify(browserify({
  basedir: '.',
  debug: true,
  entries: ['src/main.ts'],
  cache: {},
  packageCache: {}
}).plugin(tsify)
  .transform('babelify', {
    presets: ['es2015'],
    extensions: ['.ts']
  }));

gulp.task('copy-html', function () {
  return gulp.src(paths.pages)
    .pipe(gulp.dest("dist"));
});

function bundle() {
  return watchedBrowserify
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('dist'));
}
//npm install --save-dev babelify babel-preset-es2015 vinyl-buffer gulp-sourcemaps
gulp.task('default', ['copy-html'], bundle);
watchedBrowserify.on('update', bundle);
watchedBrowserify.on('log', gutil.log);
