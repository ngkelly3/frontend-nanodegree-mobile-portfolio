# Getting Started
1. Check out repository
2. Access /dist folder
3. Run local http server/secure tunnel application (http-server/ngrok used for this project) to view optimized index.html and subsequent code

## Running index.html
1. Use link provided by ngrok or equivalent application to view index.html and obtain score on PageInsights

## Running src/views/js/main.js (pizza.html)
1. Use link provided by ngrok or equivalent application to access index.html
2. Click "Cam's Pizzeria" link to access pizza.html from index.html
3. Open Chrome Developer Tools and ensure "Show FPS meter" is selected
4. Scroll through the webpage, noting console output and FPS meter
5. Toggle Pizza Slider to change pizza sizes, noting console output

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
1. Change document.querySelector/querySelectorAll to getElementByClass and getElementById where applicable
2. Remove constant calculations from 'for' loop and apply calculation outside the loop
3. Utilize requestAnimationFrame to activate updatePositions via scrolling activity
4. Dynamically generate number of pizzas shown on window based on browser height and number of columns
5. Use translate3d to move pizzas across the screen
6. Apply 'use strict' for function definitions

### resizePizzas function
1. Follow Cameron's Udacity "Stop FSL" lesson for guidance to achieve below 1ms time to change pizza
(see Lesson 5, Browser Rendering Optimization, Project P4 for more information)
2. Remove determineDx requirement and change switch statement to return a width
3. Apply newWidth via subsequent 'for' loop
4. Utilize 'use strict' for faster runtime

### Further Optimizations
Grunt build tools were used to optimize pizza.html and associated files.
