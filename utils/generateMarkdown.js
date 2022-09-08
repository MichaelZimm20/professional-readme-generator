// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license){ 
    switch (license) {
      case (license = 'Apache license'):
          return `[![License: Apache](https://img.shields.io/badge/license-Apache-blue)](https://choosealicense.com/licenses/apache-2.0/)`;
      case (license = 'MIT license'):
          return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://choosealicense.com/licenses/mit/#)`;
      case (license = 'ISC license'):
          return `[![License: ISC](https://img.shields.io/badge/license-ISC-red)](https://opensource.org/licenses/ISC)`;
      // If user selects the used: 'The Unlicense'  
      case (license = 'The Unlicense'):
          return `[![License: The Unlicense](https://img.shields.io/badge/license-The%20Unlicense-orange)](https://choosealicense.com/licenses/unlicense/)`;        
      
      default :
           // If user selects "no license used" then return empty
           if (license = 'No license used') return '';
    }

  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
