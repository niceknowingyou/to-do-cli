import jsonFile from './list.json' with { type: 'json' };
import fs from 'node:fs';

export function printJson(path) {
  let data = fs.readFileSync(path);
  let myJsonList = JSON.parse(data);
  myJsonList.list.forEach(function(task, index) {
    console.log(`${index}: ${task}`);
  });
}
