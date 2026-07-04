const fs = require('fs');
const path = require('path');

const dataFolder = path.join(__dirname, 'data');

if(!fs.existsSync(dataFolder)){
    fs.mkdirSync(dataFolder)
    console.log('folder created');
    
}

const filePath = path.join(dataFolder, 'example.txt');

fs.writeFileSync(filePath, 'hello');
console.log('file is created');

const readFileContent = fs.readFileSync(filePath);

console.log(readFileContent);

const readFileContentinUTF = fs.readFileSync(filePath, 'utf8');

console.log(readFileContentinUTF);

fs.appendFileSync(filePath, '\nA new line is created here');
console.log('new line created');

console.log(fs.readFileSync(filePath, 'utf8'));
