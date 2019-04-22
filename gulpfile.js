// Require
const gulp          = require('gulp');

// Data
const config        = require('./gulp/config');
const _builds       = require('./gulp/tasks/_builds')(config);
const _serves       = require('./gulp/tasks/_serves')(config, _builds);

// Export
Object.assign(exports, {
    default: gulp.series(_builds.global, _serves.global),
    build: _builds.global,
    scripts: _builds.scripts,
    styles: _builds.styles,
    clean: _builds.clean
});