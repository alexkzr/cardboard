var gulp = require("gulp");
var browserSync = require("browser-sync").create();
var sass = require("gulp-sass");
var imagemin = require("gulp-imagemin");
var gutil = require("gulp-util");
var ftp = require("vinyl-ftp");
var autoprefixer = require("gulp-autoprefixer");
var plumber = require('gulp-plumber');

// Static Server + watching scss/html files
gulp.task("serve", function () {
  browserSync.init({
    server: "./"
  });

  gulp.watch("sass/**/*.sass", ["sass"]).on("change", browserSync.reload);
  gulp.watch("*.html").on("change", browserSync.reload);
});

gulp.task("deploy", function () {
  var conn = ftp.create({
    host: "188.127.230.7",
    user: "user88606",
    password: "wwobin2bs",
    log: gutil.log
  });

  var globs = ["sass/**", "css/**", "js/**", "fonts/**", "img/**", "*.html"];

  // using base = '.' will transfer everything to /public_html correctly
  // turn off buffering in gulp.src for best performance

  return gulp
    .src(globs, {
      base: ".",
      buffer: false
    })
    .pipe(conn.newer("/www/kozyrev.site/glo/lesson19")) // only upload newer files
    .pipe(conn.dest("/www/kozyrev.site/glo/lesson19"));
});
gulp.task("compress", function () {
  gulp
    .src("imgxl/**/*.png")
    .pipe(imagemin())
    .pipe(gulp.dest("img/"));
});
// Compile sass into CSS & auto-inject into browsers
gulp.task("sass", function () {
  return gulp
    .src("sass/*.sass")
    .pipe(plumber())
    .pipe(sass().on("error", sass.logError))
    .pipe(autoprefixer({
      browsers: ["last 4 versions"],
      cascade: false
    }))
    .pipe(gulp.dest("./css"))
    .pipe(browserSync.stream());
});

gulp.task("default", ["sass", "serve", "compress"]);