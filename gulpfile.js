const gulp = require('gulp');
const sass = require('./build/sass');
const scripts = require('./build/scripts');
const images = require('./build/images');
const sync = require('./build/browsersync');

[sass, scripts, images, sync].forEach(task => {
  task(gulp);
});

gulp.task('build', ['sass', 'scripts', 'images', 'jekyll-build']);

var deploy = require('gulp-gh-pages');

/**
 * Push build to gh-pages
 */
gulp.task('deploy', function () {
  return gulp.src("./build/**/*")
    .pipe(deploy({
      remoteUrl: "https://github.com/paramshah10/paramshah10.github.io.git",
      branch: "master"
    }))
});
