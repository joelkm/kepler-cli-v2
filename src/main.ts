#!/usr/bin/env node

import chalk from 'chalk';
import inquirer from 'inquirer';
import chalkAnimation from 'chalk-animation';
import readline from 'readline';
import figlet from 'figlet';
import gradient from 'gradient-string';



// Pause handler between dialogs

const pause = async () => {
  return await new Promise<void>((resolve) => {
    readline.emitKeypressEvents(process.stdin);
    
    if (process.stdin.isTTY) process.stdin.setRawMode(true);
  
    process.stdin.on('keypress', (chunk, key) => {
      if (key.name == 'escape') {
        console.log(
          chalk.green(
            `Escape pressed, exiting the process`
          )
        );
        process.exit();
      }
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
        `Press any key to start or esc to exit`
      )
    );
  });
  await pause();
}

async function menu() {
  let running = true;
  while(running){
    const option = await inquirer.prompt({
      name: 'menu',
      type: 'list',
      message: 'Please, select an option\n',
      choices: [
      "Start",
      "What's this?",
      "What's Kepler?",
      "Exit",
    ],
  });
  switch (option) {
    case "Start":
      
      break;
    case "What's this?":
      
      break;
    case "What's Kepler?":
      
      break;
    case "Exit":
      
      break;
    default:
      break;
  }
}
}



await titleScreen();
await menu();
