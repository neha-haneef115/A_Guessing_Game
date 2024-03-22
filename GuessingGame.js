#! /usr/bin/env node
import inquirer from "inquirer";
console.log("Number Guessing Game");
console.log("=======================");
const answer = await inquirer.prompt([{ message: "Enter your number: ", type: "number", name: "GuessNumber" }]);
let guessingnumber = Math.floor(Math.random() * 6 + 1);
if (answer.GuessNumber === guessingnumber) {
    console.log("Congratulation! Your guess is right.");
}
else {
    console.log("Oops you guess was wrong.");
}
