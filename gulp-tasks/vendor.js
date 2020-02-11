"use strict";
import { paths } from "../gulpfile.babel";
import gulp from "gulp";
import browsersync from "browser-sync";
gulp.task("vendor", () => {
    return gulp.src(paths.vendor.src)
        .pipe(gulp.dest(paths.vendor.dist))
        .pipe(browsersync.stream());
});