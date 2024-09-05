// Define Parent 
class Shape{
constructor (shapeColor){ // what the it will hinheriate 
this.textcolor= shapeColor; }}

// for each shape below it will henarate Parent --> class Shape 

class Circle extends Shape{
constructor (shapeColor){
    super(shapeColor);
}} 
render ()


// <circle cx="150" cy="100" r="80" fill="${.shapecolor}"></circle> ?????

class Triangle extends Shape{
    constructor (shapeColor){
        super (shapeColor);
    }
} 
render ()
// <polygon points="150,10 240,180 60,180" fill="${.shapecolor}"></polygon> ?????

class Rectangle extends Shape{
    constructor(shapeColor){
        super (shapeColor);
    }
} 
render ()
// <rect x="65" y="40" width="150" height="100" fill="${.shapecolor}"></rect> ?????
