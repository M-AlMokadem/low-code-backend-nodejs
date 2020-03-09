const fs = require('fs');
const toml = require('toml');

const filePath = './temp-web-site/web-site/config.toml';

fs.readFile(filePath, 'utf8', (err, file) => {
  if (err) console.log(err);
  else {
    const tomlObject = toml.parse(file);

    console.log('toml params ===>', tomlObject.languages.en.title);

    var result = file.replace(tomlObject.languages.en.title, 'value from API');
    fs.writeFile(filePath, result, 'utf8', function(err) {
      if (err) return console.log(err);
    });
  }
});
