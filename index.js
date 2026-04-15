import fs from 'node:fs';
import readline from 'node:readline';

fs.readFile('./list.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(`current data in .txt file: \n ${data}`);
});

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("", (content) => {
  fs.appendFile('./list.txt',`${content} \n`, err => {
    if (err) {
      console.error(err);
    } else {
      console.log('\x1b[32m', "content added", '\x1b[0m');
    }
  });
  rl.close();
});
