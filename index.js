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



