#!/usr/bin/env node

import chalk from 'chalk';
import inquirer from 'inquirer';
import chalkAnimation from 'chalk-animation';
import readline from 'readline';



// Pause handler between dialogs

const wait = async () => {
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
    const rainbowTitle = chalkAnimation.rainbow(`
    Mola mucho no?
    `);
    await wait();
  }
  
  async function next() {
    const rainbowTitle = chalkAnimation.rainbow(`
    Mola bastante
    `);
    await wait();
    rainbowTitle.stop();
  }
  
console.clear();
await intro();
await next();
