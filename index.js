#!/usr/bin/env node

import readline from 'node:readline';
import { addToList } from './addToList.js';
import { menu } from './menu.js';
import { printContent } from './printContent.js';

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

printContent(path);

if (input === undefined) {
  menu(rl, path);
} else {
  addToList(rl, path, joinedInput);
}
