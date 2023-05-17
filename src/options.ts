import { getPlanets } from './data/parse-data.js';
import chalk from 'chalk'
import inquirer from 'inquirer';

async function handleStart() {
    let answers = await inquirer.prompt({
        name: 'option',
        type: 'list',
        message: 'Please, select an option',
        choices: [
        "Habitability",
        "Temperature",
        "Size",
        "Orbital period",
        ],
      });    
    
    if (answers.option != 'Habitability') {
        answers = await inquirer.prompt({
            name: '',
            type: 'input',
            message: 'What is your name?',
            default() {
              return 'Player';
            }
        })
    }
}
async function handleGuide() {
    
}
async function handleKepler() {

}
async function handleExit() {
    console.log(chalk.green('Shutting down the app...\n'));
    process.exit(1);
}

export { handleStart, handleGuide, handleKepler, handleExit }