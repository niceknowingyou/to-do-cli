#!/usr/bin/env node

import readline from 'node:readline';
import { addToList } from './addToList.js';
import { menu } from './menu.js';
import { printContent } from './printContent.js';
import jsonFile from './list.json' with { type: 'json' };
import fs from 'node:fs';
import { addToJson } from './addToJson.js';
import { printJson } from './printJson.js';

// const linuxPath = '/home/oliver/repos/to-do-cli/list.txt';
// const windowsPath = '/Users/n/repos/to-do-cli/list.txt';
const windowsPath = '/Users/n/repos/to-do-cli/list.json';
const linuxPath = '/home/oliver/repos/to-do-cli/list.json';
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
printJson(path);

if (input === undefined) {
  menu(rl, path);
} else {

  let data = fs.readFileSync(path);
  let myJsonList = JSON.parse(data);
  myJsonList.list.push(joinedInput);
  let updatedJson = JSON.stringify(myJsonList);

  addToJson(path, updatedJson);
  console.log(updatedJson);
  process.exit();
  //  addToList(rl, path, joinedInput);
}
// File.list.splice(joinedInput,1);

