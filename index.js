const fs = require("fs");

const inquirer = require("inquirer");

const generateMarkdown = require("./utils/generateMarkdown");


  inquirer
  .prompt([
    {
      type: "input",
      message: "What is the name of this project",
      name: "title",
    },
    {
      type: "input",
      message: "Please give a description of this project",
      name: "description",
    },
    {
      type: "input",
      message: "Why did you create this project",
      name: "why",
    },
    {
      type: "input",
      message: "What are the steps required to install this project",
      name: "Installation",
    },
    {
      type: "input",
      message: "Give instructions for use.",
      name: "usage",
    },
    {
      type: "input",
      message: "List your collaborators or third party resources",
      name: "credits",
    },
    {
      type: "input",
      message: "List any thirdparty assets",
      name: "credits",
    },
    {
      type: "input",
      message: "What problem does it solve",
      name: "problem",
    },
    {
      type: "input",
      message: "What did you learn",
      name: "learning",
    },
    {
      type: "input",
      message: "What are some of the features included in this application",
      name: "features",
    },
    {
      type: "input",
      message: "What were some challenges",
      name: "challenges",
    },
    {
      type: "list",
      message: "select a license",
      name: "license",
      choices: ["Unlicense","Mozilla Public License","MIT","Eclipse Public License","GNU General Public License"]
    },
    {
      type: "input",
      message: "Please enter an email address or github account for questions",
      name: "questions",
    },
    {
      type: "input",
      message: "How can people contribute to this project",
      name: "contribute",
    },
  ]).then((data) => {
    console.log(data);
    fs.writeFile("README.md", generateMarkdown(data), (error) => {
      if (error) {
        console.log("Please finish inputting all data.");
      }
      console.log("Your README has been generated");
    }
  )})
