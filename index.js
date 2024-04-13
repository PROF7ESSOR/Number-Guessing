#! /usr/bin/env node
import inquirer from "inquirer";
const randomnumber = Math.floor(Math.random() * 6 + 1);
console.log("Welcome To Number Guessing Game");
const answers = await inquirer.prompt([
    {
        name: "userguessnumber",
        type: "number",
        message: "please guess a number between 1-6",
    },
]);
if (answers.userguessnumber === randomnumber) {
    console.log("congratulation! Your Guessed Number Is Right");
}
else {
    console.log("Oh No! You Guessed A Wrong Number");
}
