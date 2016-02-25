var Imagemin = require('imagemin');
var mozjpeg = require('imagemin-mozjpeg'); // pulls from global module library

module.exports = function(grunt) {

// code below breaks the JS
grunt.initConfig({
  imagemin: {                          // Task
    /*static: {                          // Target
      options: {                       // Target options
        optimizationLevel: 5,
        svgoPlugins: [{ removeViewBox: false }],
        use: [mozjpeg()]
      },
      files: {                         // Dictionary of files
        'build/views/pizzeria.jpg': 'views/images/pizzeria.jpg', // 'destination': 'source'
        'build/img/profilepic.jpg': 'img/profilepic.jpg'
      }
    }, */


   dist: {
      options: {
        optimizationLevel: 5
      },
      files: [{
         expand: true,
         cwd: 'img',
         src: ['**/*.{png,jpg,gif}'],
         dest: 'build/'
      }]
   }
   },

	critical: {
    dist: {
      options: {
        base: './',
        css: [
        	'css/style.css',
        	'css/print.css'
        ]
      },
      // The source file
      src: 'index.html',
      // The destination file
      dest: 'result.html'
      }
    },

    htmlmin: {                                     // Task
    dist: {                                      // Target
      options: {                                 // Target options
        removeComments: true,
        collapseWhitespace: true
      },
      files: {                                   // Dictionary of files
        'dist/index.html': 'index.html'	// destination: source
      }
    },
  }



});

grunt.loadNpmTasks('grunt-contrib-imagemin');
grunt.loadNpmTasks('grunt-critical');
grunt.loadNpmTasks('grunt-contrib-htmlmin');

// this JS actually works
grunt.registerTask('speak', function() {
	console.log("Hello Bitch");
});


};