const inquirer = require('inquirer');
const fs = require('fs');

// function for prompt questions
inquirer.prompt([
    { type:'input', name:'text', message: 'Input 3 character text',},
    { type:'input', name:'textcolor', message:'Enter color for your text',},
    { type:'input', name:'shape', message:'Choose the shape you would like', choices:['circle,triangle,square'],} ,
    { type:'input', name:'shapecolor', message:'Enter the color for your shape ',},
    
])
/* 
.then((answers) =>
.catch((err) => console.error(err)) */
// create error for 3 charter length

// functions to write file name inside folder example/logo-ex.svg 
// fs.writefile('logo.svg')
// err =>  err? console.log(err)
// console.log("Generated Logo.svg is printed in the command line");


// Blank SVG LOGO  with if statements for each option of user input 
// if user chooses circle put into a string    -->for each answers we writefile (:

// const circleOption = 
/*
`${<svg version="1.1"
width="300" height="200"
xmlns="http://www.w3.org/2000/svg">

<circle cx="150" cy="100" r="80" fill="green"></circle>

<text x="150" y="125" font-size="40" text-anchor="middle" fill="white">SVG</text>
</svg>}`*/

// const triangleOption =
/* 
`${<svg version="1.1" 
width="300" height="200" 
xmlns="http://www.w3.org/2000/svg">

    <polygon points="150,10 240,180 60,180" fill="lime"></polygon> 
    <text x="146" y="170" font-size="40" text-anchor="middle" fill="white">SVG</text>
    </svg>}` */

// const rectangleOption = 
/*
`${ <svg version="1.1" 
width="300" height="200" 
 xmlns="http://www.w3.org/2000/svg">
    <rect x="65" y="40" width="150" height="100" fill="#9EDBEA"></rect>
    <text x="135" y="97" font-size="40" text-anchor="middle" fill="white">SVG</text>
    </svg>}` */


