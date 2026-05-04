import fs from 'node:fs';

export function addToJson (rl, path, content) {
  fs.appendFile(path,`${content} \n`, err => {
    if (err) {
      console.error(err);
    } else {
      console.log('\x1b[32m');
      console.log("content added", '\x1b[0m');
    }
    process.exit();
  });
}

