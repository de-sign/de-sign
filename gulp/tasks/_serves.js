// Require
const gulp          = require('gulp');
const browserSync   = require('browser-sync').create();

// Export
module.exports = function(config, _builds){

    const _serves = {
        browserSync: (done) => {
            browserSync.init({
                server: config.paths.dest.root,
                watch: true
            });
            done();
        },
        
        watch: (done) => {
            for( let task in config.files){
                gulp.watch(config.paths.src[task] + '/' + config.files[task], gulp.series(_builds[task]));
            };
            done();
        }
    };
    _serves.global = gulp.series(_serves.browserSync, _serves.watch);

    return _serves;
};