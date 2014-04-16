/**
 * Created by sandro on 4/16/2014.
 */

module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-bower-task');

    grunt.initConfig({
        bower: {
            install: {
                options: {
                    targetDir: './assets/lib',
                    layout: 'byType',
                    install: true,
                    verbose: false,
                    cleanTargetDir: false,
                    cleanBowerDir: false,
                    bowerOptions: {}
                }
            }
        }
    });



}
