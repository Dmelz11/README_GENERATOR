//create a function that returns a license badge based on license used
//If there is no license return an empty string
function renderLicense(license) {
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

//create a function that retuns the license link
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
    if 
}