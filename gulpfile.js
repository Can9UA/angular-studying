'use strict';

const gulp = require('gulp'),
      pug = require('gulp-pug'),
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
  // работает тольео если вручную изменить html файл или сохранить pug файл два раза (мб проблема в pug??)
  browserSync.watch(['app/js/*.js', 'app/*.html']).on('change', browserSync.reload);
});

gulp.task('pug-compile', function () {
  return gulp.src(['app/pug/**/*.pug', '!app/pug/_*/*'])
    .pipe(
      pug({pretty: true})
    )
    .pipe(gulp.dest('app/'));
    // .pipe(browserSync.stream());
});

gulp.task('default',
  gulp.series('pug-compile', gulp.parallel('reload-page', 'watch'))
);