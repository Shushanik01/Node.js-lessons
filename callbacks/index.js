const fs = require('fs');

 const readingFile = fs.readFile('input.txt', 'utf8', (err, data)=>{
    if(err){
        console.error(err)
        return
    } else{
    console.log(data);
    }
});

console.log(readingFile);
