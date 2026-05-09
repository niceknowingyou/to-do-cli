import fs from 'node:fs';

export function removeFromJson(path, updatedJson) {
  try {
    fs.writeFileSync(path, updatedJson);
    console.log('item removed');
  } catch (err) {
    console.error(err);
  }
}
