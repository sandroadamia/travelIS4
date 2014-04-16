/**
 * Created by sandro on 4/16/2014.
 */

module.exports = function (grunt) {
    grunt.log.write("Runing moveBowerComponents task")


    grunt.registerTask('moveBowerComponents', [
        'bower:install',
    ]);

};
