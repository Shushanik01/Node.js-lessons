const { log } = require('console');
const fs = require('fs');

// fs.readFile('./starter.txt', (err, data)=>{
//     if(err) throw new err
//     console.log(data.toString());
    
// });

fs.readFile('./starter.txt', 'utf-8', (err, data)=>{
    if (err) throw new err
    console.log(data);
    
});

process.on('uncaughtException', err =>{
    console.log(err);
    process.exit(1)
});

fs.writeFileSync('hello.txt', 'Hello world!');
console.log('Hello.txt created');

const content = fs.readFileSync('./hello.txt', 'utf-8', (err, data)=>{
    if (err) throw new err
    console.log(content);
    
});

const updated = fs.appendFileSync('./hello.txt', '\nThis is a new line');

fs.unlinkSync('./hello.txt')