import fs from 'node:fs';
import { addToJson } from './addToJson.js';
import jsonFile from './list.json' with { type: 'json' };

export function menu (rl, path) {
  rl.question("[a]dd, [d]el or cancel [any key]? \n", (answer) => {
    if (answer === "a") {
      rl.question("what do you want to add? \n", (content) => {
        let data = fs.readFileSync("list.json");
        let myJsonList = JSON.parse(data);
        myJsonList.list.push(content);
        let updatedJson = JSON.stringify(myJsonList);
        addToJson("list.json", updatedJson);
      });
    } else if (answer === "d") {
      //code for deleting something
      process.exit();
    } else {
      console.log("nothing added or removed try running program again.");
      process.exit();
    }
  });
}
