// Require
const gulp          = require('gulp');
const browserSync   = require('browser-sync').create();

// Export
module.exports = function(config, _builds){

    const _serves = {
        browserSync: (done) => {
            browserSync.init(config.plugins.browserSync);
            done();
        },
        
        watch: (done) => {
            for( let task in config.files.watch){
                gulp.watch(
                    Array.isArray(config.files.watch[task]) ?
                        config.files.watch[task].map( file => config.paths.src[task] + '/' + file ) :
                        config.paths.src[task] + '/' + config.files.watch[task],
                    gulp.series(_builds[task])
                );
            };
            done();
        }
    };
    _serves.global = gulp.series(_serves.browserSync, _serves.watch);

    return _serves;
};