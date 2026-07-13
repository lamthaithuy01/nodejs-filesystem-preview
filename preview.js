const fs = require('fs');

const fileName = process.argv[2];

if (!fileName) {
  console.log(`Error: Please provide a filename.`);
} else {
  const content = fs.readFileSync(fileName,'utf-8');
  const lines = content.split('\n');

  console.log('Total lines in file:', lines.length);
  const firstFive = lines.slice(0,5);
  console.log(firstFive.join('\n'));
}
