var Imagemin = require('imagemin');
var mozjpeg = require('imagemin-mozjpeg'); // pulls from global module library

module.exports = function(grunt) {

    grunt.initConfig({
        imagemin: {
            dynamic: {
                options: {
                    optimizationLevel: 5
                },
                files: [{
                    expand: true,
                    cwd: 'src/img',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'dist/img'
                }]
            },

            dist: {
                options: {
                    optimizationLevel: 5
                },
                files: [{
                    expand: true,
                    cwd: 'src/views/images',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'dist/views/images'
                }]
            }
        },

        // inline critical CSS for index.html ONLY
        critical: {
            dist: {
                options: {
                    base: './',
                    css: [
                        'src/css/style.css',
                        'src/css/print.css'
                    ]
                },
                // The source file
                src: 'src/index.html',
                // The destination file
                dest: 'dist/index.html'
            }
        },

        htmlmin: { // Task
            dist: { // Target
                options: { // Target options
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: { // Dictionary of files
                    'dist/index.html': 'dist/index.html', // destination: source
                    'dist/project-2048.html': 'src/project-2048.html',
                    'dist/project-mobile.html': 'src/project-mobile.html',
                    'dist/project-webperf.html': 'src/project-webperf.html',
                    'dist/views/pizza.html': 'src/views/pizza.html'
                }
            },
        },

        uglify: {
            my_target: {
                options: {
                    sourceMap: true,
                    sourceMapName: 'path/to/sourcemap.map'
                },
                files: {
                    'dist/js/perfmatters.js': 'src/js/perfmatters.js',
                    'dist/views/js/main.js': 'src/views/js/main.js'
                }
            }
        },

        cssmin: {
        	options: {
    			shorthandCompacting: false,
    			roundingPrecision: -1
  			},
  			target: {
                files: {
                'dist/css/style.css': 'src/css/style.css',
                'dist/css/print.css': 'src/css/print.css',
                'dist/views/css/style.css': 'src/views/css/style.css',
                'dist/views/css/bootstrap-grid.css': 'src/views/css/bootstrap-grid.css'
                }
            }
        }
    });

    // load tasks and have them run on "grunt" command
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-critical');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.registerTask('default', ['imagemin', 'critical', 'htmlmin', 'uglify', 'cssmin']);
};