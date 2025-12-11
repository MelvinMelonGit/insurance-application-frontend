const { prompt } = require("enquirer");
const { exec } = require("child_process");
const { promisify } = require("util");

const execAsync = promisify(exec);

const questions = [
  {
    type: "select",
    name: "task",
    message: "Choose a task",
    choices: [
      { name: "build", message: "Build project", value: () => console.log("Building...") },
      { name: "test", message: "Run tests", value: () => console.log("Testing...") },
      { name: "deploy", message: "Deploy app", value: () => console.log("Deploying...") }
    ]
  }
];

async function run() {
  const answers = await prompt(questions);

  // Execute the function directly
  answers.task();
}

run();