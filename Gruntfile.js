var Imagemin = require('imagemin');
var mozjpeg = require('imagemin-mozjpeg'); // pulls from global module library

module.exports = function(grunt) {

    grunt.initConfig({

        imagemin: {
            dist: {
                options: {
                    optimizationLevel: 5
                },
                files: [{
                    expand: true,
                    cwd: 'src/img',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'dist/img'
                }]
            }
        },

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
                    'dist/index.html': 'dist/index.html' // destination: source
                }
            },
        }
    });

    // load tasks and have them run on "grunt" command
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-critical');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.registerTask('default', ['imagemin', 'critical', 'htmlmin']);
};