const fs = require('fs');

function rawicons(fileName) {
  const dir = 'app/api/';
  const content = fs.readFileSync(dir + fileName.src, 'utf8');
  return content.toString();
}

module.exports = rawicons;
