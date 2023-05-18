import readline from 'readline';

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

export { pause };