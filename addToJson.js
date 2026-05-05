import fs from 'node:fs';

export function addToJson (rl, path, content) {
  fs.appendFile(path, content, err => {
    if (err) {
      console.error(err);
    } else {
      console.log("content added");
    }
    process.exit();
  });
}

