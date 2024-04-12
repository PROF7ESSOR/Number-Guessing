import inquirer from "inquirer";
const randomnumber = Math.floor(Math.random() * 6 + 1);

const answers = await inquirer.prompt([
  {
    name: "userguessnumber",
    type: "number",
    message: "please guess a number between 1-6",
  },
]);
if (answers.userguessnumber === randomnumber) {
  console.log("congratulation! Your Guessed Number Is Right");
} else {
  console.log("Oh No! You Guessed A Wrong Number");
}
