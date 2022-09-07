// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'GitHubUsername', //GitHub Username
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
        name: 'emailAddress', //User's Email
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
        name: 'DescriptionWhat', //What was your motivation
        message: 'What is your motivation and what will it solve? (Required)',
        validate: whatInput => {
            if (whatInput) {
                return true;
            } else {
                console.log('Please enter what your project is about!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'DescriptionWhy', //Why did you build this project?
        message: 'What did you build this project? (Required)',
        validate: whyInput => {
            if (whyInput) {
                return true;
            } else {
                console.log('Please enter why you created this project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'DescriptionHow', // how is it used?
        message: 'How is it used? (Required)',
        validate: howInput => {
            if (howInput) {
                return true;
            } else {
                console.log('Please enter how its used!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'Installation', // installation steps     
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
        name: 'Usage', // Provide instructions and examples for use. Include screenshots as needed.   
        message: 'Provide instructions and examples for use.  (Required)',
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
        name: 'License', // the license. This lets other developers know what they can and cannot do with your project.    
        message: 'Select each license that was used for this project. ',
        choices: ['Apache', 'MIT', 'ISC', 'Unlicense', 'No license used' ]
    },
    {
        type: 'input',
        name: 'Test', // provide examples on how to run them here.
        message: 'Instructions on how to test the application. (Required) ',
        validate: testInput => {
            if (testInput) {
                return true;
            } else {
                console.log('Please provide your instructions and examples!');
                return false;
            }
        }
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
