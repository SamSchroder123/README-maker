const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  {
    type: "input",
    name: "title",
    message: "Please enter title: ",
    default: "My Repository",
  },
  {
    type: "input",
    name: "description",
    message: "Please enter a description: ",
  },
  {
    type: "input",
    name: "installation",
    message: "Please enter installation instructions: ",
  },
  {
    type: "input",
    name: "usage",
    message: "Please enter usage information: ",
  },
  {
    type: "expand",
    name: "license",
    message: "Please choose your licence",
    choices: [
      {
        key: "m",
        name: "MIT",
        value: "MIT",
      },
      {
        key: "c",
        name: "Creative Commons",
        value: "Creative Commons",
      },
      {
        key: "z",
        name: "Mozilla",
        value: "Mozilla",
      },
    ],
  },
  {
    type: "input",
    name: "contributing",
    message: "Please enter contribution guidelines: ",
  },
  {
    type: "input",
    name: "tests",
    message: "Please enter test instructions: ",
  },
  {
    type: "input",
    name: "username",
    message: "Please enter your github username: ",
  },
  {
    type: "input",
    name: "email",
    message: "Please enter your email for contact: ",
  },
];

// function to write README file
function writeToFile(fileName, data) {
  console.log("writing to file...");
  let text = generateMarkdown(data);
  console.log(text);
  fs.writeFile(fileName, text, (err) => {
    if (err) {
      console.log("An error occurred writing to file.");
      console.log(err);
    }
  });
}

// function to initialize program
function init() {
  inquirer.prompt(questions).then((answers) => {
    console.log(answers);
    writeToFile("README.md", answers);
  });
}

// function call to initialize program
init();
