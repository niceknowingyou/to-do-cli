import fs from 'node:fs';

export function addToJson(path, updatedJson) {
  try {
    fs.writeFileSync(path, updatedJson);
    console.log("success")
  } catch (err) {
    console.error(err);
  }
}
