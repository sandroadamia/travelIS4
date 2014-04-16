module.exports = function (grunt) {
	grunt.registerTask('default', ['moveBowerComponents','compileAssets', 'linkAssets',  'watch']);
};
