/// <binding BeforeBuild='webpack:build-dev' />
var gulp = require("gulp");
var gutil = require("gulp-util");
var webpack = require("webpack");
var webpackConfig = require("./webpack.config.js");

var gulp = require('gulp');

gulp.task('default', function () {
    // place code for your default task here
});

// Build and watch cycle (another option for development)
// Advantage: No server required, can run app from filesystem
// Disadvantage: Requests are not blocked until bundle is available,
//               can serve an old app on refresh
gulp.task("build-dev", ["webpack:build-dev"], function () {
    gulp.watch(["src/**/*","src/*"], ["webpack:build-dev"]);
});

// create a single instance of the compiler to allow caching
var devCompiler = webpack(webpackConfig);

gulp.task("webpack:build-dev", function (callback) {
    // run webpack
    devCompiler.run(function (err, stats) {
        if (err) throw new gutil.PluginError("webpack:build-dev", err);
        gutil.log("[webpack:build-dev]", stats.toString({
            colors: true
        }));
        callback();
    });
});