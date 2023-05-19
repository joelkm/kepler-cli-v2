import readline from 'readline';

// To pause the process between dialogs
const pause = async (first) => {
    return await new Promise<void>((resolve) => {
      readline.emitKeypressEvents(process.stdin);
      
      if (process.stdin.isTTY) process.stdin.setRawMode(true);

      // This is what crashes the app
      // After the first call, the app kepps on listening to 'keypress' event
      process.stdin.on('keypress', (chunk, key) => {     
        resolve();
      });
    })
  }

export { pause };