const fs = require("fs");

const inquirer = require("inquirer");

const generateMarkdown = require("./utils/generateMarkdown");

inquirer
  .prompt([
    {
      type: "input",
      message: "What is the name of this project?",
      name: "Title",
    },
    {
      type: "input",
      message: "Please give a description of this project",
      name: "description",
    },
    {
      type: "input",
      message: "Why did you create this project?",
      name: "why",
    },
    {
      type: "input",
      message: "What are the steps required to install this project",
      name: "installation",
    },
    {
      type: "input",
      message: "Give instructions for use.",
      name: "usage",
    },
    {
      type: "input",
      message: "List your collaborators",
      name: "collaborators",
    },
    {
      type: "input",
      message: "List any thirdparty assets",
      name: "thirdparty",
    },
    {
      type: "input",
      message: "What problem does it solve?",
      name: "problem",
    },
    {
      type: "input",
      message: "What did you learn?",
      name: "learning",
    },
    {
      type: "input",
      message: "How does your project stand out?",
      name: "features",
    },
    {
      type: "input",
      message: "What were some challenges?",
      name: "challenges",
    },
    {
      type: "input",
      message: "select a license",
      name: "license",
    },
    {
      type: "input",
      message: "How can people contribute to this project?",
      name: "contribute",
    },
  ])
  .then((data) => {
    console.log(data);
    fs.writeFile("README.md", generateMarkdown(data), (error) => {
      if (error) {
        console.log("Please finish inputting all data.");
      }
      console.log("Your README has been generated");
    });
  });
