// Define Parent 
class Shape{
constructor (shapeColor){ // what it will hinheriate 
this.shapeColor= shapeColor; }}
 // render () ??
// for each shape below it will henarate Parent --> class Shape 

class Circle extends Shape{
constructor (shapeColor){
    super(shapeColor);
}} 
render ()


// return `<circle cx="150" cy="100" r="80" fill="${.shapeColor}"></circle>;` .shapeColor or this.shapeColor

class Triangle extends Shape{
    constructor (shapeColor){
        super (shapeColor);
    }
} 
render ()
// return `<polygon points="150,10 240,180 60,180" fill="${.shapecolor}"></polygon>;` .shapeColor or this.shapeColor

class Rectangle extends Shape{
    constructor(shapeColor){
        super (shapeColor);
    }
} 
render ()
// return `<rect x="65" y="40" width="150" height="100" fill="${.shapecolor}"></rect>; ` .shapeColor or this.shapeColor

 module.exports = (Shape, Circle, Triangle, Rectangle); 