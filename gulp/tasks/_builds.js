// Require
const gulp          = require('gulp');
const del           = require('del');
const plumber       = require('gulp-plumber');
const sourcemaps    = require('gulp-sourcemaps');
const concat        = require('gulp-concat');
const uglify        = require('gulp-uglify');
const sass          = require('gulp-sass');
const rename        = require('gulp-rename');
const cleanCss      = require('gulp-clean-css');
const imagemin      = require('gulp-imagemin');

// Export
module.exports = function(config){

    const _builds = {
        clean: () => {
            return del([config.paths.dest.root], { force: true });
        },
        
        html: () => {
            return gulp.src(config.paths.src.html + '/' + config.files.html)
                .pipe(gulp.dest(config.paths.dest.html));
        },

        js: () => {
            return gulp.src(config.paths.src.js + '/' + config.files.js)
                .pipe(plumber())
                .pipe(sourcemaps.init())
                .pipe(concat('main.js'))
                .pipe(uglify())
                .pipe(sourcemaps.write())
                .pipe(plumber.stop())
                .pipe(gulp.dest(config.paths.dest.js));
        },
        
        scss: () => {
            return gulp.src(config.paths.src.scss + '/main.scss')
                .pipe(plumber())
                .pipe(sourcemaps.init())
                .pipe(sass())
                .pipe(rename('main.css'))
                .pipe(cleanCss())
                .pipe(sourcemaps.write())
                .pipe(plumber.stop())
                .pipe(gulp.dest(config.paths.dest.scss));
        },
        
        images: () => {
            return gulp.src(config.paths.src.images + '/' + config.files.images)
                .pipe(
                    imagemin([
                        imagemin.gifsicle({ interlaced: true }),
                        imagemin.jpegtran({ progressive: true }),
                        imagemin.optipng({ optimizationLevel: 5 }),
                        imagemin.svgo({
                            plugins: [
                                { removeViewBox: false },
                                { removeComments: true },
                                { removeHiddenElems: true },
                                { removeDimensions: true },
                                { cleanupIDs: true }
                            ]
                        })
                    ])
                )
                .pipe(gulp.dest(config.paths.dest.images));
        },
        
        fonts: () => {
            return gulp.src(config.paths.src.fonts + '/' + config.files.fonts)
                .pipe(gulp.dest(config.paths.dest.fonts));
        }
    };

    Object.assign(_builds, {
        scripts: gulp.parallel(_builds.html, _builds.js),
        styles: gulp.parallel(_builds.scss, _builds.images, _builds.fonts)
    });
    _builds.global = gulp.series(_builds.clean, gulp.parallel(_builds.scripts, _builds.styles));

    return _builds;
};