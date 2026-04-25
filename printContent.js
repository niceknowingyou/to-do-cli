import fs from 'node:fs';

export function printContent(path) {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(`current data in .txt file:`,"\x1b[33m");
    console.log(data,'\x1b[0m');
  });
}

