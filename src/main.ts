#!/usr/bin/env node

import chalk, { Chalk } from 'chalk';
import inquirer from 'inquirer';
import chalkAnimation from 'chalk-animation';
import figlet from 'figlet';
import gradient from 'gradient-string';

import { pause } from './common/pause.js';
import { handleStart, handleGuide, handleKepler, handleExit } from './options.js';


  
async function titleScreen() {
  console.clear();
  await figlet(`KEPLER  CLI  SEARCH  TOOL`, async (err, data) => {
    console.log(gradient.pastel.multiline(data) + '\n');

    console.log(
      chalk.green(
        `Press any key to start\n`
      )
    );
  });
  await pause(true);
}

async function menu() {
  let repeat = true;
  while (repeat) {
    repeat = false;
    console.clear();
    const option = await inquirer.prompt({
      name: 'menu',
      type: 'list',
      message: 'Please, select an option',
      choices: [
      "Start",
      "What's Kepler?",
      "What's this? (Guide)",
      "Exit",
      ],
    });
    console.clear();
    switch (option.menu) {
      case "Start":
        console.log(chalk.green('START'));
        await handleStart();
        break;
      case "What's Kepler?":
        console.log(chalk.green('KEPLER'));
        await handleKepler();
        break;
      case "What's this? (Guide)":
        console.log(chalk.green('GUIDE'));
        await handleGuide();
        break;
      case "Exit":
        await handleExit();
        repeat = true;        
        break;
      default:
        break;
    }
  }
    // My idea was to make the exact same interaction than the one in the title screen, but this crashes the app,
    // await pause(false);
}



await titleScreen();
await menu();
