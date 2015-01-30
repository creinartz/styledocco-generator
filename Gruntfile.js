module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        // Project settings
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    'css/main.css': 'scss/main.scss'
                }
            }
        },
        styleguide: {
            build: {
                options: {
                    framework: {
                        name: 'styledocco',
                        options: {
                            'preprocessor': 'scss'
                        }
                    },
                    name: '<%= pkg.name %>',
                    template: {
                        include: ['css/main.css']
                    }
                },
                files: {
                    'docs/css/foundation': 'scss/foundation/*.scss',
                    'docs/css/modules': 'scss/modules/*.scss'
                }
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-styleguide');
    // Default task(s).
    grunt.registerTask('default', ['sass','styleguide']);

};
