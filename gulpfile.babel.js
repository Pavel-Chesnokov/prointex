"use strict";

import gulp from "gulp";
import browserSync from "browser-sync";

const requireDir = require("require-dir"),
    paths = {
        views: {
            src: [
                "./src/views/index.pug",
                "./src/views/pages/*.pug"
            ],
            dist: "./wordpress/wp-content/themes/prointex/",
            watch: [
                "./src/blocks/**/*.pug",
                "./src/views/**/*.pug"
            ]
        },
        php: {
            src: [
                "./src/php/**/*.php"
            ],
            dist: "./wordpress/wp-content/themes/prointex",
            watch: [
                "./src/php/**/*.php"
            ]
        },
        vendor: {
            src: [
                "./vendor/**/*.php"
            ],
            dist: "./wordpress/wp-content/themes/prointex/php/vendor",
            watch: [
                "./vendor/**/*.php"
            ]
        },
        apache: {
            src: [
                "./src/.htaccess"
            ],
            dist: "./wordpress/wp-content/themes/prointex/",
            watch: [
                "./src/.htaccess"
            ]
        },
        styles: {
            src: "./src/styles/style.{scss,sass}",
            dist: "./wordpress/wp-content/themes/prointex/",
            watch: [
                "./src/blocks/**/*.{scss,sass}",
                "./src/styles/**/*.{scss,sass}"
            ]
        },
        scripts: {
            src: "./src/js/index.js",
            dist: "./wordpress/wp-content/themes/prointex/js/",
            watch: [
                "./src/blocks/**/*.js",
                "./src/js/**/*.js"
            ]
        },
        images: {
            src: [
                "./src/img/**/*.{jpg,jpeg,png,gif,tiff,svg}",
                "!./src/img/favicon/*.{jpg,jpeg,png,gif,tiff}"
            ],
            dist: "./wordpress/wp-content/themes/prointex/img/",
            watch: "./src/img/**/*.{jpg,jpeg,png,gif,svg}"
        },
        webp: {
            src: [
                "./src/img/**/*.{jpg,jpeg,png,tiff}",
                "!./src/img/favicon/*.{jpg,jpeg,png,gif}"
            ],
            dist: "./wordpress/wp-content/themes/prointex/img/",
            watch: [
                "./src/img/**/*.{jpg,jpeg,png,tiff}",
                "!./src/img/favicon.{jpg,jpeg,png,gif}"
            ]
        },
        sprites: {
            src: "./src/img/svg/*.svg",
            dist: "./wordpress/wp-content/themes/prointex/img/sprites/",
            watch: "./src/img/svg/*.svg"
        },
        fonts: {
            src: "./src/fonts/**/*.{woff,woff2}",
            dist: "./wordpress/wp-content/themes/prointex/fonts/",
            watch: "./src/fonts/**/*.{woff,woff2}"
        },
        favicons: {
            src: "./src/img/favicon/*.{jpg,jpeg,png,gif,tiff}",
            dist: "./wordpress/wp-content/themes/prointex/img/favicons/",
        },
        gzip: {
            src: "./src/.htaccess",
            dist: "./wordpress/wp-content/themes/prointex/"
        }
    };

requireDir("./gulp-tasks/");

export { paths };

export const development = gulp.series("clean", "smart-grid",
    gulp.parallel(["views", "styles", "scripts", "images", "webp", "sprites", "fonts", "favicons", "php", "apache","vendor"]),
    gulp.parallel("serve"));

export const prod = gulp.series("clean",
    gulp.series(["views", "styles", "scripts", "images", "webp", "sprites", "fonts", "favicons", "gzip", "php", "apache","vendor"]));

export default development;