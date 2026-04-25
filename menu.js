import fs from 'node:fs';
import readline from 'node:readline';
import { addToList } from './addToList.js';

export function menu (rl, path) {
  rl.question("[a]dd, [d]el or cancel [any key]? \n", (answer) => {
    if (answer === "a") {
      rl.question("what do you want to add? \n", (content) => {
        addToList(path, content);
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
}
