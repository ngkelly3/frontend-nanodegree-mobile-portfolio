# Getting Started
1. Check out repository
2. Access /dist folder
3. Run local http server/secure tunnel application (http-server/ngrok used for this project) to view optimized index.html and subsequent code

## Running index.html
1. Use link provided by ngrok or equivalent application to view index.html and obtain score on PageInsights

## Running src/views/js/main.js
1. Use link provided by ngrok or equivalent application to access index.html
2. Navigate to pizza.html from index.html

## Reviewing the Project
All files for reviewing the project are located in **src** folder for readability.

# Optimization Methods

## Grunt Build Tool with Plugins

The following grunt plugins were used in this project:

1. imagemin - compress images
2. critical - inline critical css for index.html ONLY
3. htmlmin - minify all HTML files
4. uglify - minify all JS files
5. cssmin - minify all CSS files

### Running Grunt Build Tool
1. Access main project folder repository
2. Run "grunt" command to populate /dist folder from /src directory using grunt plugins

## Optimizations for Index.html
1. Grunt build tool optimizations (see above)
2. Async google analytics
3. Resize images for proper sizing within index.html

## Optimizations for src/views/main.js
The following optimizations were made in main.js to ensure project requirements.

### updatePositions function
1. Reduce number of pizzas from 200 to 40
2. Remove constant calculation from 'for' loop and apply calculation outside the loop
3. Utilize requestAnimationFrame to activate updatePositions via scrolling activity

### resizePizzas function

1. Follow Cameron's Udacity "Stop FSL" lesson for guidance to achieve below 1ms time to change pizza
(see Lesson 5, Browser Rendering Optimization, Project P4 for more information)
2. Remove determineDx requirement and change switch statement to return a width
3. Apply newWidth via subsequent 'for' loop
4. Utilize 'use strict' for faster runtime

### Further Optimizations

Grunt build tools were used to optimize pizza.html and associated files.
