import { getPlanets } from './parse-data.js';
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
    let property = answers.option;
    let bottomLimit, topLimit;
    if (property != 'Habitability') {
        answers = await inquirer.prompt({
            name: 'bottomLimit',
            type: 'number',
            message: 'Describe a bottom limit for the interval',
            default() {
              return 0;
            }
        })
        answers = await inquirer.prompt({
            name: 'topLimit',
            type: 'number',
            message: 'Describe a top limit for the interval',
            default() {
              return 999999999;
            }
        })
        bottomLimit = answers.bottomLimit;
        topLimit = answers.topLimit;
    }
    let planets = await getPlanets(property, bottomLimit, topLimit);
    console.log(`There are ${planets.length} results`);
    answers = await inquirer.prompt({
        name: 'show',
        type: 'confirm',
        message: 'Do you want to see them?',
        default() {
            return true;
        }
    })
    if (answers.show) {
        console.log(planets);
    }
}
async function handleGuide() {
    
}
async function handleKepler() {

}
async function handleExit() {
    const answers = await inquirer.prompt({
        name: 'exit',
        type: 'confirm',
        message: 'You have chosen "Exit". Are you sure?',
        default() {
            return true;
        }
    })
    if (answers.exit) {
        console.log(chalk.green('Shutting down the app...\n'));
        process.exit(1);
    }    
}

export { handleStart, handleGuide, handleKepler, handleExit }