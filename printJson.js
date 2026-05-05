import jsonFile from './list.json' with { type: 'json' };
import fs from 'node:fs';

export function printJson() {
  let data = fs.readFileSync("list.json");
  let myJsonList = JSON.parse(data);
  console.log(myJsonList);
}
