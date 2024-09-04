const inquirer = require('inquirer');
const fs = require('fs');

// function for prompt questions
inquirer.prompt([
    { type: 'input', name: 'text', message: 'Input 3 character text' },
    { type: 'input', name: 'textcolor', message: 'Enter color for your text', },
    { type: 'list', name: 'shape', message: 'Choose the shape you would like', choices: ["circle", "triangle", "rectangle",] },
    { type: 'input', name: 'shapecolor', message: 'Enter the color for your shape' }])

    .then((answers) => {

        console.log(answers)
    });

// create error for 3 charter length //

// `` 
// functions to write file name inside folder examples/logo-ex.svg 

function writeToFile(answers) {


    // Blank SVG LOGO  with if statements for each shape option 
    // if user chooses circle/tirangle/rectangle add shapesArray + fucntioncircleOption(answers)  --> then for each answer we writefile (:

    const shapesArray =
        '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';


    if (answers.shape === 'circle')
        return ` 
    <circle cx="150" cy="100" r="80" fill=" ${answers.shapecolor} "></circle> <text x="150" y="125" font-size="40" text-anchor="middle" fill=" ${answers.textcolor}">SVG</text></svg>
    ` ;
     /*   if (answers.shape === "circle")
    THEN append shapesArray w/ return THEN write file } */

    if (answers === 'triangle')
        return `
        <polygon points="150,10 240,180 60,180" fill="${answers.shapecolor}"></polygon><text x="146" y="170" font-size="40" text-anchor="middle" fill="${answers.textcolor}">SVG</text></svg>}
        `;
    

    /* if (answers.shape === "triangle")
    THEN append shapesArray + return THEN write file } */


    if (answres === 'rectangle')
        return `
            <rect x="65" y="40" width="150" height="100" fill="${answers.shapecolor}"></rect><text x="135" y="97" font-size="40" text-anchor="middle" fill="${answers.textcolor}">SVG</text></svg>}
            `;
    }

/* if (answers.shape === "rectangle")
THEN append shapesArray + return THEN write file} */


/* fs.writefile('logo.svg')
(err) => err? console.log(err)
console.log("Generated Logo.svg is printed in the command line"); */

