// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

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
        //title of project
        {
            type: 'input',
            name: 'title', 
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
        //Describe your project. Motivation, what is solved, why you built it, how its used.
        {
            type: 'input',
            name: 'description', 
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
        // installation steps  
        {
            type: 'input',
            name: 'installation',    
            message: 'Provide a step-by-step of how install your project.  (Required)',
            validate: installInput => {
                if (installInput) {
                    return true;
                } else {
                    console.log('Please provide your installation steps!');
                    return false;
                }
            }
        },
        // Provide instructions and examples for use. Include screenshots as needed. 
        //and examples for use.
        {
            type: 'input',
            name: 'usage',   
            message: 'Provide instructions on how to use your app. (Required)',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('Please provide your instructions and examples!');
                    return false;
                } 
            }
        },
         // user will provide a screenshot of the project. PNG or JPEG, JPG. 
        {
            type: 'input',
            name: 'example',  
            message: 'To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Use the relative filepath, add it to your README. : . (Required)',
        },
        // Those who contributed to this project. 
        {
            type: 'input',
            name: 'contribution',   
            message: 'Provide all those who have contributed and credits, if any, and provide links it needed. (Required)',
            validate: creditInput => {
                if (creditInput) {
                    return true;
                } else {
                    console.log('Please contributions and credits!');
                    return false;
                }
            }
        },
        // the license. This lets other developers know what they can and cannot do with your project.
        {
            type: 'list',
            name: 'license',     
            message: 'Select each license that was used for this project. ',
            choices: ['Apache license', 'MIT license', 'ISC license', 'The Unlicense', 'No license used' ]
        },
        // provide examples on how to run them here.
        {
            type: 'input',
            name: 'tests', 
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
            writeToFile('./dist/README.md', generateMarkdown(answers))
            .then(writeToFileResponse => {
                console.log(writeToFileResponse.message);
            })
            // .then(markdownData => {
            //     console.log(markdownData);
            //     return generateMarkdown(markdownData);
            // })
            // .then(readmeFile => {
            //     //after all answers are collected write to file!
            //    return writeToFile('./dist/README.md', generateMarkdown(readmeFile));
            // })
            .catch(err => {
                console.log(err)
            });    
        })
}

// Function call to initialize app
init();

