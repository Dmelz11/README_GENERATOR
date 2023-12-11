//create a function that returns a license badge based on license used
//If there is no license return an empty string
function renderLicenseBadge (license) {
  if (license === "Unlicense") {
    return "";
  }
  if (license === "mozilla public license") {
    return "![License: MPL 2.0] (https://img.shields.io/badge/License-MPL_2.0-brightgree.svg)(https:/opensource.org/licenses/MPL-2.0)";
  }
  if (license === "MIT") {
    return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)(https://opensource.org/licenses/MIT)";
  }
  if (license === "Eclipse Public License") {
    return "![License: EPL](https://img.shields.io/badge/License-EPL_1.0-red.svg)(https://opensource.org/licenses/EPL-1.0)";
  }
  if (license === "GNU General Public License") {
    return "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)(https://www.gnu.org/badge/licenses/gpl-3.0)";
  }
}

//create a function that returns the license link
//if there is no license return an empty string
function renderLicense(license) {
  
  if (license === "mozilla public license") {
    return "![License: MPL 2.0](https:/opensource.org/licenses/MPL-2.0)";
  }
  if (license === "MIT") {
    return "![License: MIT](https://opensource.org/licenses/MIT)";
  }
  if (license === "Eclipse Public License") {
    return "![License: EPL](https://opensource.org/licenses/EPL-1.0)";
  }
  if (license === "GNU General Public License") {
    return "![License: GPL General Public License](https://www.gnu.org/badge/licenses/gpl-3.0)";
  }
  if (license === "Unlicense") {
    return "";
 }
}
//create a function that returns the license section of README.
//if no license return an empty string
function renderLicenseSection(license){
    if (license ==="Unlicense"){
      return "";
    }
    if (license !== "Unlicense"){
      return `##license`
    }
}
//create a function to generate a markdownnfor README
function generateMarkdown(data){
  return `

# Title

${data.title}



## Description
${data.description}
${data.why}
${data.problem}
${data.learning}
${data.challenges}

## Table of Contents
-[title](#title)
-[description](#description)
-[installation](#installation)
-[usage](#usage)
-[credits](#credits)
-[license](#license)
-[badges](#badges)
-[features](#features)
-[questions](#questions)
-[how to contribute](#how to contribute)



## Installation

${data.installation}

## Usage
To use this application do the folling:
![alt text](/assets/images/screenshot.png)
${data.usage}

## credits

${data.credits}


## License

${renderLicenseBadge(data.license)}

## Badges

![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgree.svg)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
![License: EPL](https://img.shields.io/badge/License-EPL_1.0-red.svg)
![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)


## Features

${data.features}

## Questions
I can be reached through my github account:(https://${data.github}/)
${data.questions}

## How to contribute

${data.contribute}



`;
}
module.exports = generateMarkdown;