#!/usr/bin/env node

import fs from 'node:fs';
import readline from 'node:readline';

const linuxPath = '/home/oliver/repos/to-do-cli/list.txt';
const windowsPath = '/Users/n/repos/to-do-cli/list.txt';
const [,,input] = process.argv;
const joinedInput = process.argv.slice(2).join(' ');

console.log(joinedInput);

let path = '';
if (process.platform === 'win32') {
  path = windowsPath;
} else if (process.platform === 'linux') {
  path = linuxPath;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

fs.readFile(path, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(`current data in .txt file:`,"\x1b[33m");
  console.log(data,'\x1b[0m');
});

if (input === undefined) {
  rl.question("[a]dd, [d]el or cancel [any key]? \n", (answer) => {
    if (answer === "a") {
      rl.question("what do you want to add? \n", (content) => {
        fs.appendFile(path,`${content} \n`, err => {
          if (err) {
            console.error(err);
          } else {
            console.log('\x1b[32m', "content added", '\x1b[0m');
          }
        });
        rl.close();
      });
    } else if (answer === "d") {
      fs.writeFile(path, '', function(){
        console.log('\x1b[32m', "file cleared", '\x1b[0m');
      });
      rl.close();
    } else {
      console.log("nothing added or removed try running program again.");
      rl.close();
    }
  });
} else {
  fs.appendFile(path,`${joinedInput} \n`, err => {
    if (err) {
      console.error(err);
    } else {
      console.log('\x1b[32m', "content added", '\x1b[0m');
    }
  });
  rl.close();
}
