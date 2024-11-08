# p5.play Object Oriented

This project enables you to use ES2016 classes along with the p5.play sprites.

This project is intended to teach students the use of classes and object-oriented programming.

examples:
- https://teacher-svb.github.io/p5-play-OO-games/games/platformer/
- https://teacher-svb.github.io/p5-play-OO-games/games/missile-command/
- https://teacher-svb.github.io/p5-play-OO-games/games/typingGame/
- https://teacher-svb.github.io/p5-play-OO-games/games/snake/

## Project startup

 - go to https://github.com/T-INFORMATICA/p5-play-OO
 - download ZIP
 - extract files to project folder

## Preparing your project

 - create a folder called `scripts`
 - create a file in the `scripts` folder called `[YourGameName].js`
 - Add the file in `index.html` using a `<script>` element
 - create a `class` in `[YourGameName].js` called `[YourGameName]` that extends from `Game`
 - Give it an empty constructor, except for the call to the super constructor
 - Open sketch.js
 - create a variable `game` with value `null`
 - initialize the variable `game` in the function `setup()` with `new [YourGameName]()`
 - call `game.Update()` *(mark the capital 'U'!)* from the function `draw()`
 - test to see if you get a black canvas when running `index.html` in your browser

## Creating a class

 1. Create a file called `[YourClassName].js`
 2. Add the file in `index.html` using a `<script>` element
 3. Write the base code for the class in `[YourClassName].js`
 4. Create an object for that class
 5. Write the rest of the code for your class
