"use strict";
import { paths } from "../gulpfile.babel";
import gulp from "gulp";
import browsersync from "browser-sync";
gulp.task("apache", () => {
    return gulp.src(paths.apache.src)
        .pipe(gulp.dest(paths.apache.dist))
        .pipe(browsersync.stream());
});