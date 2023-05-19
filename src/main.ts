#!/usr/bin/env node

import chalk from 'chalk';
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
  // I want to wrap this in a while loop, but I can't (scroll down) 
    console.clear();
    const option = await inquirer.prompt({
      name: 'menu',
      type: 'list',
      message: 'Please, select an option',
      choices: [
      "Start",
      "What's this?",
      "What's Kepler?",
      "Exit",
      ],
    });
    console.clear();
    switch (option.menu) {
      case "Start":
        console.log('START');
        await handleStart();
        break;
      case "What's this?":
        await handleGuide();
        break;
      case "What's Kepler?":
        await handleKepler();
        break;
      case "Exit":
        await handleExit();        
        break;
      default:
        break;
    }
    // My idea was to make the exact same interaction than the one in the title screen, but this crashes the app,
    // await pause(false);
}



await titleScreen();
await menu();
