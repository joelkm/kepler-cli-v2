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
        console.log('Escape pressed, exiting the process');
        process.exit();
      }
      console.clear()
      resolve();
    });
  })
}

  let repeat = true;
  
  async function intro() {
    figlet(`KEPLER  CLI  SEARCH  TOOL`, (err, data) => {
      console.log(gradient.pastel.multiline(data) + '\n');
  
      console.log(
        chalk.green(
          `Press any key to start or esc to exit`
        )
      );
    });
    await pause();
  }
  
  async function next() {
    const rainbowTitle = chalkAnimation.rainbow(`What's Kepler?`);
    await pause();
    rainbowTitle.stop();
  }
  
console.clear();
await intro();
await next();
