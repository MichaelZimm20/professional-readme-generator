// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license){ 
    switch (license) {
      // If user selects the following license: 'Apache license'
      case (license = 'Apache license'):
          return `[![License: Apache](https://img.shields.io/badge/license-Apache-blue)]`;
      // If user selects the following license: 'MIT license'
      case (license = 'MIT license'):
          return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`;
      // If user selects the following license: 'ISC license' 
      case (license = 'ISC license'):
          return `[![License: ISC](https://img.shields.io/badge/license-ISC-red)]`;
      // If user selects the following license: 'The Unlicense' 
      case (license = 'The Unlicense'):
          return `[![License: The Unlicense](https://img.shields.io/badge/license-The%20Unlicense-orange)]`;        
      
      default :
           // If user selects "no license used" then return empty
           if (license = 'No license used') return '';
    };
  };
};
console.log(renderLicenseBadge());
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license){ 
    switch (license) {
      // If user selects the following license: 'Apache license', return its respective link
      case (license = 'Apache license'):
          return `[License: Apache](https://choosealicense.com/licenses/apache-2.0/)`;
      // If user selects the following license: 'MIT license', return its respective link
      case (license = 'MIT license'):
          return `[License: MIT](https://choosealicense.com/licenses/mit/#)`;
      // If user selects the following license: 'ISC license' , return its respective link
      case (license = 'ISC license'):
          return `[License: ISC](https://opensource.org/licenses/ISC)`;
      // If user selects the following license: 'The Unlicense' , return its respective link
      case (license = 'The Unlicense'):
          return `[License: The Unlicense](https://choosealicense.com/licenses/unlicense/)`;        
      
      default :
           // If user selects "no license used" then return empty
           if (license = 'No license used') return '';
    };
  };
};
console.log(renderLicenseLink());
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
 if (license) {
  return `${renderLicenseLink(license)}`
 }
}
console.log(renderLicenseSection())
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
