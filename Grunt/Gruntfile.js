module.exports = function(grunt) {
	grunt.initConfig({
		livereloadPort : 4000,
		connect: {
			server: {
				options: {
					port: 3000,
					livereload: '<%= livereloadPort %>',
					open: true
				}
			}
		},
		handlebars: {
			compile: {
				src: '**/*.tpl',
				dest: 'app/templates/templates.js',
				options: {
					namespace: 'Handlebars.templates',
					processName: function(filePath) {
						var pieces = filePath.split("templates/");
						return pieces[pieces.length - 1];
					},
					processPartialName: function(filePath) {
						var pieces = filePath.split("templates/");
						return pieces[pieces.length - 1];
					}
				}
			}
		},
		watch: {
			files: {
				files: ['**/*.{html,htm,css,js,png,jpg,gif}', '!**/libs/**'],
				options: {
					livereload: '<%= livereloadPort %>',
					interval: 700
				}
			},
			templates: {
				files: '**/*.tpl',
				tasks: ['handlebars'],
				options: {
					atBegin: true
				}
			}
		}
	});

	grunt.registerTask('compile', ['handlebars']);
	grunt.registerTask('server', ['connect:server:keepalive']);
	grunt.registerTask('dev', ['connect', 'watch']);

	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-handlebars');
	grunt.loadNpmTasks('grunt-contrib-watch');
}
