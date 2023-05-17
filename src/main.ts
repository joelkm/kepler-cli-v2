#!/usr/bin/env node

import chalk from 'chalk';
import inquirer from 'inquirer';
import chalkAnimation from 'chalk-animation';
import readline from 'readline';
import figlet from 'figlet';
import gradient from 'gradient-string';

import { handleStart, handleGuide, handleKepler, handleExit } from './options.js';



// To pause the process between dialogs

const pause = async () => {
  return await new Promise<void>((resolve) => {
    readline.emitKeypressEvents(process.stdin);
    
    if (process.stdin.isTTY) process.stdin.setRawMode(true);
  
    process.stdin.on('keypress', (chunk, key) => {
      resolve();
    });
  })
}

  
async function titleScreen() {
  console.clear();
  await figlet(`KEPLER  CLI  SEARCH  TOOL`, async (err, data) => {
    console.log(gradient.pastel.multiline(data) + '\n');

    console.log(
      chalk.green(
        `Press any key to start or esc to exit\n`
      )
    );
  });
  await pause();
}

async function menu() {
  while(true){
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
    switch (option.menu) {
      case "Start":
        console.clear();
        console.log('START');
        await handleStart();
        break;
      case "What's this?":
        console.clear();
        await handleGuide();
        break;
      case "What's Kepler?":
        console.clear();
        await handleKepler();
        break;
      case "Exit":
        await handleExit();
        break;
      default:
        break;
    }
  }
}



await titleScreen();
await menu();
