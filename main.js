#!/usr/bin/env node
import inquirer from 'inquirer';
// Function to generate a multiplication table for a given number
function generateTable(num) {
    console.log(`Multiplication Table for ${num}:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }
}
// Prompt the user for a number using Inquirer
async function promptUser() {
    const answer = await inquirer.prompt([
        {
            type: 'number',
            name: 'number',
            message: 'Enter the number for the multiplication table (2-10):',
            validate: (input) => {
                return (input >= 2 && input <= 10) ? true : 'Please enter a number between 2 and 10';
            }
        }
    ]);
    // Generate the table based on user input
    generateTable(answer.number);
}
// Call the prompt function
promptUser();
