// include gulp
var gulp         = require('gulp'),
    sass         = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss    = require('gulp-minify-css'),
    jade         = require('gulp-jade'),
    rename       = require('gulp-rename');

//var minifyHTML = require('gulp-minify-html');

// var concat = require('gulp-concat');
// var stripDebug = require('gulp-strip-debug');
// var uglify = require('gulp-uglify');

// // minify new images
// gulp.task('imagemin', function() {
//   var imgSrc = './src/images/**/*',
//       imgDst = './build/images';
 
//   gulp.src(imgSrc)
//     .pipe(changed(imgDst))
//     .pipe(imagemin())
//     .pipe(gulp.dest(imgDst));
// });

// ==========================================================================
// SASS - Compile your sass
// ==========================================================================

gulp.task('styles', function() {
  return gulp.src('./src/styles/scss/main.scss')
    .pipe(sass({ style: 'expanded' }))
    //.pipe(gulp.dest('./public/css'))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest('./public/css'));
});

//Default to run

gulp.task('templates', function() {
  return gulp.src('./src/*.jade')
    .pipe(jade({
      pretty: true
    }))
    .pipe(gulp.dest('./public/'));
    //.pipe( livereload( server ));
});

//Watch tasks until cancel

// default gulp task
gulp.task('default', ['styles', 'templates'], function() {
  
  // watch for HTML changes
  // gulp.watch('./src/**/*.php', function() {
  //   gulp.run('htmlpage');
  // });

  // watch for HTML changes
  gulp.watch('./src/*.jade', function() {
    gulp.run('templates');
  });
 
  // watch for JS changes
  // gulp.watch('./src/scripts/script.js', function() {
  //   gulp.run('jshint', 'scripts');
  // });
 
  // watch for SCSS changes
  gulp.watch('./src/styles/**/*.scss', function() {
    gulp.run('styles');
  });
});