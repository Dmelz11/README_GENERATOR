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
    return "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/badge/licenses/gpl-3.0)";
  }
}

//create a function that returns the license link
//if there is no license return an empty string
function renderLicenseLink(license) {
  if (license === "Unlicense") {
    return "";
  }
  if (license === "mozilla public license") {
    return "(https:/opensource.org/licenses/MPL-2.0)";
  }
  if (license === "MIT") {
    return "(https://opensource.org/licenses/MIT)";
  }
  if (license === "Eclipse Public License") {
    return "(https://opensource.org/licenses/EPL-1.0)";
  }
  if (license === "GNU General Public License") {
    return "(https://www.gnu.org/badge/licenses/gpl-3.0)";
  }
}
//create a function that returns the license section of README.
//if no license return an empty string
function renderLicenseSection(license){
    if (license ==="Unlicense"){
      return "";
    }
}
//create a function to generate a markdownnfor README
function generateMarkdown(data){
  return `#{data.title};


## Description

-${data.why}
-${data.problem}
-${data.learning}
-${data.features}
-${data.challenges}

## Table of Contents

-[installation](#installation)
-[usage](#usage)
-[credits](#credits)
-[license](#license)
-[features](#features)
-[how to contribute](#how to contribute)



## Installation

-${data.install}

## Usage

![alt text](/assets/images/screenshot.png)

## credits

-${data.contributors}
-${data.thirdparty}

## License

-${renderLicenseBadge(data.license)}

## Badges

![License: MPL 2.0] (https://img.shields.io/badge/License-MPL_2.0-brightgree.svg)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
![License: EPL](https://img.shields.io/badge/License-EPL_1.0-red.svg)
![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)


## Features

-${data.features}

## How to contribute

-${data.contribute}

`;
}
module.exports = generateMarkdown;