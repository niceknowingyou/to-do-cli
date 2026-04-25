import fs from 'node:fs';
import readline from 'node:readline';

export function addToList (path, content) {
  fs.appendFile(path,`${content} \n`, err => {
    if (err) {
      console.error(err);
    } else {
      console.log('\x1b[32m', "content added", '\x1b[0m');
      rl.close();
    }
  });
}

