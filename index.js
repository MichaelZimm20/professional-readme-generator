// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
   
        {
            type: 'input',
            name: 'github', //GitHub Username
            message: 'What is the GitHub Username? (Required)',
            validate: gitHubInput => {
                if (gitHubInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email', //User's Email
            message: 'What is the email address? (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter a valid email address!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'title', //title of project
            message: 'What is the title of your project? (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter your title!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description', //Describe your project. Motivation, what is solved, why you built it, how its used.
            message: 'Provide a detail description of the project?  (Required)',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please enter what your project is about!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation', // installation steps     
            message: 'Provide a step-by-step description of how install your project.  (Required)',
            validate: installInput => {
                if (installInput) {
                    return true;
                } else {
                    console.log('Please provide your installation steps!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage', // Provide instructions and examples for use. Include screenshots as needed.   
            message: 'Provide instructions and examples for use.To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Use the relative filepath, add it to your README. (Required)',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('Please provide your instructions and examples!');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'license', // the license. This lets other developers know what they can and cannot do with your project.    
            message: 'Select each license that was used for this project. ',
            choices: ['Apache license', 'MIT license', 'ISC license', 'The Unlicense', 'No license used' ]
        },
        {
            type: 'input',
            name: 'test', // provide examples on how to run them here.
            message: 'Instructions on how to test the application. (Required) ',
            validate: testInput => {
                if (testInput) {
                    return true;
                } else {
                    console.log('Please provide your instructions and examples!');
                    return false;
                }
            }
        }
    
    ];

// TODO: Create a function to write README file
function writeToFile(fileName, data)  {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, data, err => {
             // if there's an error, reject the Promise and send the error to the Promise's .catch() method
             if (err) {
                reject(err);
                // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
                return;
             }

            // if everything went well, resolve the Promise and send te successful data to the `.then()` method 
            resolve({
                ok: true,
                message: 'Readme Generated!'
            });
        });
    });
};



// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
            .then(answers => {
            console.log(answers)
          


        //after all answers are collected write to file!
        //TODO -build a string that uses our answers to generate some markdown, and write that
        // to our file as the 'data' parameter. (replace the test values below)
        writeToFile('./dist/README.md', readmeFile)
        });
}

// Function call to initialize app
init();
