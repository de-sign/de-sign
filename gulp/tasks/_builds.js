// Require
const gulp          = require('gulp');
const del           = require('del');
const plumber       = require('gulp-plumber');
const data          = require('gulp-data');
const fs            = require('fs');
const path          = require('path');
const nunjucks      = require('gulp-nunjucks');
const gulpif        = require('gulp-if');
const sourcemaps    = require('gulp-sourcemaps');
const concat        = require('gulp-concat');
const beautify      = require('gulp-beautify');
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
            return gulp.src(config.paths.src.html + '/' + config.files.src.html)
                .pipe(plumber(config.plugins.plumber))
                .pipe(data((file) => {
                    return {
                        US: JSON.parse(
                            fs.readFileSync('src/data/' + path.basename(file.path, '.html') + '.json')
                        )
                    };
                }))
                .pipe(nunjucks.compile())
                .pipe(plumber.stop())
                .pipe(gulp.dest(config.paths.dest.html));
        },

        js: () => {
            return gulp.src(config.paths.src.js + '/' + config.files.src.js)
                .pipe(plumber(config.plugins.plumber))
                .pipe(gulpif(config.env.isDevelopment, sourcemaps.init(config.plugins.sourcemaps.js.init)))
                .pipe(concat(config.files.dest.js))
                .pipe(gulpif(config.env.isDevelopment, beautify.js(config.plugins.beautify.js), uglify(config.plugins.uglify)))
                .pipe(gulpif(config.env.isDevelopment, sourcemaps.write(config.plugins.sourcemaps.js.write)))
                .pipe(plumber.stop())
                .pipe(gulp.dest(config.paths.dest.js));
        },
        
        scss: () => {
            return gulp.src(config.paths.src.scss + '/' + config.files.src.scss)
                .pipe(plumber(config.plugins.plumber))
                .pipe(gulpif(config.env.isDevelopment, sourcemaps.init(config.plugins.sourcemaps.css.init)))
                .pipe(sass())
                .pipe(rename(config.files.dest.scss))
                .pipe(gulpif(config.env.isDevelopment, beautify.css(config.plugins.beautify.css), cleanCss(config.plugins.cleanCss)))
                .pipe(gulpif(config.env.isDevelopment, sourcemaps.write(config.plugins.sourcemaps.css.write)))
                .pipe(plumber.stop())
                .pipe(gulp.dest(config.paths.dest.scss));
        },
        
        images: () => {
            return gulp.src(config.paths.src.images + '/' + config.files.src.images)
                .pipe(imagemin(config.plugins.imagemin))
                .pipe(gulp.dest(config.paths.dest.images));
        },
        
        fonts: () => {
            return gulp.src(config.paths.src.fonts + '/' + config.files.src.fonts)
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