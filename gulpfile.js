'use strict';

const gulp = require('gulp'),
      pug = require('gulp-pug'),
      plumber = require('gulp-plumber'),
      browserSync = require('browser-sync').create();

gulp.task('watch', function () {
  gulp.watch(['app/pug/**/*.pug'], gulp.series('pug-compile'));
});

gulp.task('reload-page', function () {
  browserSync.init({
    server: './',
    port: '9000',
    notify: false,
    startPath: 'app/'
  });

  browserSync.notify('Compiling, please wait!');
  //https://github.com/BrowserSync/browser-sync/issues/1065
  browserSync.watch(['app/js/*.js', 'app/*.html']).on('change', browserSync.reload);
});

gulp.task('pug-compile', function () {
  return gulp.src(['app/pug/**/*.pug', '!app/pug/_*/*'])
    .pipe(plumber({
      errorHandler: function (err) {
        console.error(err.message);
        this.emit('end'); // If you don't emit an end event, your error will not cause a crash, but your task will just hang forever and you'll have to re-start the watch process anyway. (http://blog.ibangspacebar.com/handling-errors-with-gulp-watch-and-gulp-plumber/)
      }})
    )
    .pipe(
      pug({pretty: true})
    )
    .pipe(gulp.dest('app/'));
    // .pipe(browserSync.stream());
});

gulp.task('default',
  gulp.series('pug-compile', gulp.parallel('reload-page', 'watch'))
);