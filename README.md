# Getting Started

## Running the Project
1. Check out repository
2. Access /dist folder and run http-server/ngrok to view index.html and subsequent code
3. Use link provided by ngrok to view score on PageInsights

## Reviewing the Project
1. All files for reviewing the project are located in **src** folder for readability

# Build Tools - Grunt

## Build Tools Used In This Project
The following grunt plugins were used in this project:

1. imagemin - compress images
2. critical - inline critical css for index.html ONLY
3. htmlmin - minify all HTML files
4. uglify - minify all JS files
5. cssmin - minify all CSS files

## Running Grunt Build Tool
1. Access main project folder repository
2. Run "grunt" command to populate /dist folder from /src directory using grunt plugins

# Optimizations

## Optimizations in Index.html
1. Grunt build tool optimizations (see above)
2. async google analytics
3. Resize images for proper sizing within index.html

## Optimizations in src/views/main.js

### updatePositions function
1. Reduce number of pizzas from 200 to 40
2. Remove constant calculation from 'for' loop and apply calculation outside the loop
3. Utilize requestAnimationFrame to activate updatePositions via scrolling activity

### resizePizzas function

1. Followed Cameron's Udacity "Stop FSL" lesson for guidance to achieve below 1ms time to change pizza
2. Remove determineDx requirement and change switch statement to return a width
3. Apply width via subsequent 'for' loop
4. Utilize 'use strict' for faster runtime
