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
        bottomLimit = answers.bottomLimit;
        answers = await inquirer.prompt({
            name: 'topLimit',
            type: 'number',
            message: 'Describe a top limit for the interval',
            default() {
              return 999999999;
            }
        })
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
    console.log(`Kepler was a space observatory designed to search for exoplanets, which are planets orbiting stars outside our solar system. It operated from 2009 to 2018 and made significant contributions to our understanding of exoplanets.

Kepler used the transit method to detect exoplanets. It monitored the brightness of over 150,000 stars in a specific region of the sky, looking for tiny dips in brightness that occur when a planet passes in front of its host star from our line of sight. By measuring these periodic brightness changes, scientists could infer the presence of exoplanets and gather information about their size, orbital period, and distance from their stars.

The mission was highly successful, discovering thousands of exoplanet candidates, including many Earth-sized and potentially habitable ones. Kepler's findings revolutionized our understanding of the prevalence and diversity of exoplanets in our galaxy.

In addition to exoplanets, Kepler also made important contributions to other areas of astrophysics. It studied stellar astrophysics, observed stellar variability, and provided insights into the structure and evolution of stars.

Although the primary Kepler mission ended in 2013 due to the failure of two of its reaction wheels used for precise pointing, NASA extended its mission as the K2 mission, utilizing the remaining capabilities of the spacecraft to continue exoplanet searches and other scientific investigations.

You can find more information about Kepler at ${chalk.blue('https://www.nasa.gov/')}`);
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