#!/usr/bin/env node

import readline from 'node:readline';
import { addToList } from './addToList.js';
import { menu } from './menu.js';
import { printContent } from './printContent.js';
import jsonFile from './list.json' with { type: 'json' };
import fs from 'node:fs';
import { addToJson } from './addToJson.js';

const linuxPath = '/home/oliver/repos/to-do-cli/list.txt';
const windowsPath = '/Users/n/repos/to-do-cli/list.txt';
const [,,input] = process.argv;
const joinedInput = process.argv.slice(2).join(' ');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// console.log(joinedInput);

let path = '';
if (process.platform === 'win32') {
  path = windowsPath;
} else if (process.platform === 'linux') {
  path = linuxPath;
}

// printContent(path);

/* 
  if (input === undefined) {
  menu(rl, path);
} else {
  addToList(rl, path, joinedInput);
}
*/

// jsonFile.list.splice(joinedInput,1);
let data = fs.readFileSync("list.json");
let myJsonList = JSON.parse(data);
myJsonList.list.push(joinedInput);

let updatedJson = JSON.stringify(myJsonList);
/*
fs.writeFile("list.json", updatedJson, err => {
  if (err) {
    console.error(err);
  } else {
    console.log("file written sucessfully");
  }
});
*/
/*
try {
  fs.writeFileSync("list.json", updatedJson);
  console.log("success")
} catch (err) {
  console.error(err);
}
*/
addToJson("list.json", updatedJson);
console.log(updatedJson);
process.exit();
