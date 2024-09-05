const inquirer = require('inquirer');
const fs = require('fs');


inquirer.prompt([
    { type: 'input', name: 'text', message: 'Input 3 character text' },
    { type: 'input', name: 'textcolor', message: 'Enter color for your text', },
    { type: 'list', name: 'shape', message: 'Choose the shape you would like', choices: ["circle", "triangle", "rectangle",] },
    { type: 'input', name: 'shapecolor', message: 'Enter the color for your shape' }])
  
// create error for 3 charter length 
// `` 
// functions to write file name inside folder examples/logos.svg 

// Blank SVG LOGO  with if statements for each shape option 
// if user chooses circle/tirangle/rectangle add shapesArray + return string --> then for each answer we writefile (:
function returnStrings(answers) {
    let shapesArray = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';

    /*   if (answers.shape === "circle")
   THEN append shapesArray w/ return THEN write file } */
    if (answers.shape === "circle")
        return shapesArray += ` 
    <circle cx="150" cy="100" r="80" fill=" ${answers.shapecolor} "></circle> <text x="150" y="125" font-size="40" text-anchor="middle" fill=" ${answers.textcolor}">SVG</text></svg>
    ` ;

    /* if (answers.shape === "triangle")
    THEN append shapesArray + return THEN write file } */
    else if (answers.shape === "triangle")
        return shapesArray += `
        <polygon points="150,10 240,180 60,180" fill="${answers.shapecolor}"></polygon><text x="146" y="170" font-size="40" text-anchor="middle" fill="${answers.textcolor}">SVG</text></svg>}
        `;


    /* if (answers.shape === "rectangle")
    THEN append shapesArray + return THEN write file} */
    else (answers.shape === "rectangle")
    return shapesArray += `
            <rect x="65" y="40" width="150" height="100" fill="${answers.shapecolor}"></rect><text x="135" y="97" font-size="40" text-anchor="middle" fill="${answers.textcolor}">SVG</text></svg>}
            `;
        }
        console.log(shapesArray);          // ??


function writeToFile() {
    fs.writeFile('./examples' + returnStrings(answers))
    if (err) { console.log(err); }
    console.log("Generated Logo.svg is printed in the command line");
}
  /*   writeToFile('logos.svg',returnStrings(answers));
 */
writeToFile('logos.svg');

