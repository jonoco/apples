var 
  gulp      = require('gulp'),
  gutil     = require('gulp-util'),
  webserver = require('gulp-webserver'),
  minifyCSS = require('gulp-minify-css'),
  rename    = require('gulp-rename'),
  concat    = require('gulp-concat'),
  sass      = require('gulp-sass'),
  babel     = require('gulp-babel'),
  prefix    = require('gulp-autoprefixer'),
  jade      = require('gulp-jade'),
  uglify    = require('gulp-uglify');

gulp.task('js', function() {
  gulp.src('src/js/main.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('js-min', function() {
  gulp.src('src/js/main.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});

gulp.task('sass', function() {
  gulp.src('src/stylesheets/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(prefix())
    .pipe(rename('main.css'))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('sass-min', function() {
  gulp.src('src/stylesheets/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(prefix())
    .pipe(minifyCSS())
    .pipe(rename('main.css'))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('jade', function() {
  gulp.src('src/jade/index.jade')
    .pipe(jade({
      pretty: true
    }))
    .pipe(gulp.dest('./'));
});

gulp.task('jade-min', function() {
  gulp.src('src/jade/index.jade')
    .pipe(jade())
    .pipe(gulp.dest('./'));
});

gulp.task('watch', function() {
  gulp.watch('src/stylesheets/*/*.scss', ['sass']);
  gulp.watch('src/js/*.js', ['js']);
  gulp.watch('src/jade/*.jade', ['jade']);
});

gulp.task('webserver', function() {
  gulp.src('./')
    .pipe(webserver({
      livereload: true,
      open: true
    }));
});

gulp.task('default', ['watch', 'js', 'sass', 'jade', 'webserver']);
gulp.task('build', ['js-min', 'sass-min', 'jade-min']);
