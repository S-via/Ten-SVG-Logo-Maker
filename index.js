const inquirer = require('inquirer');
const fs = require('fs');
// const requirer = requirer ('./lib/shapes') ??


inquirer.prompt([
    { type: 'input', name: 'text', message: 'Input 3 character text' },
    { type: 'input', name: 'textColor', message: 'Enter color for your text', },
    { type: 'list', name: 'shape', message: 'Choose the shape you would like', choices: ["circle", "triangle", "rectangle",] },
    { type: 'input', name: 'shapeColor', message: 'Enter the color for your shape' }])
    .then((answers) => {returnStrings(answers)});


    // shapesArray carries first part of   with if statements for each shape option 
    // if user chooses circle/tirangle/rectangle it will add to string to shapesArray --> then for each option we writefile (:
    
    function returnStrings(answers) {
        
        
        let shapesArray = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
        
        /*   if (answers.shape === "circle")
        THEN add to shapesArray w/ returning full string  */
        if (answers.shape === "circle")
            return shapesArray += ` 
        <circle cx="150" cy="100" r="80" fill=" ${answers.shapecolor} "></circle> <text x="150" y="125" font-size="40" text-anchor="middle" fill=" ${answers.textcolor}">${answers.text}</text></svg>
        ` ;
        
        /* if (answers.shape === "triangle")
        THEN add to shapesArray w/ returning full string */
        else if (answers.shape === "triangle")
            return shapesArray += `
        <polygon points="150,10 240,180 60,180" fill="${answers.shapecolor}"></polygon><text x="146" y="170" font-size="40" text-anchor="middle" fill="${answers.textcolor}">${answers.text}</text></svg>
        `;
        
        
        /* if (answers.shape === "rectangle")
        THEN add to shapesArray w/ returning full string */
        else (answers.shape === "rectangle")
        return shapesArray += `
        <rect x="65" y="40" width="150" height="100" fill="${answers.shapecolor}"></rect><text x="135" y="97" font-size="40" text-anchor="middle" fill="${answers.textcolor}">${answers.text}</text></svg>
        `;
    }
    // store function inside fileData variable 
    const fileData = returnStrings(answers)
    // write file inside folder examples/logos.svg // and make variable a string 

    fs.writeFile('/examples/logo.svg', JSON.stringify(fileData), (err) => {
        if (err) { 
            console.error(err); }
   else {
console.log("Generated Logo.svg is printed in the command line");  }});  

