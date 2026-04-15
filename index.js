import fs from 'node:fs';

const content = "content";

fs.appendFile('./list.txt', content, err => {
  if (err) {
    console.error(err);
  } else {
    console.log("content added");
  }
})

fs.readFile('./list.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
