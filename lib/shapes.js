// Define Parent 
class Shape{
constructor (textcolor){ // what the it will hinheriate 
this.textcolor= textcolor; }}

// for each shape below it will henarate Parent --> class Shape 

class Circle extends Shape{
constructor (textcolor){
    super(textcolor);
}} 
render ()

// <text x="150" y="125" font-size="40" text-anchor="middle" fill=" ${answers.textcolor}">SVG</text>?????

class Triangle extends Shape{
    constructor (textcolor){
        super (textcolor);
    }
} 
render ()
// <text x="146" y="170" font-size="40" text-anchor="middle" fill="${answers.textcolor}">SVG</text> ?????

class Rectangle extends Shape{
    constructor(textcolor){
        super (textcolor);
    }
} 
render ()
// <text x="135" y="97" font-size="40" text-anchor="middle" fill="${answers.textcolor}">SVG</text> ?????
