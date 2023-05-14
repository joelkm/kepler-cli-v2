import chalk from 'chalk';
import inquirer from 'inquirer';
import chalkAnimation from 'chalk-animation';

// Make promise that resolves on enter key pressed
// const sleep = new Promise 
// store it on a new module

async function intro() {
  const rainbowTitle = chalkAnimation.rainbow(`
  Mola mucho no?
  `);
}

async function next() {
    const rainbowTitle = chalkAnimation.rainbow(`
    Mola bastante
    `);
  }


console.clear();
await intro();
await next();
