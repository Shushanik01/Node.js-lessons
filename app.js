import fs from 'node:fs';
// import express from 'express';
// import generateName  from 'sillyname';
// import superheroes from 'superheroes';
// import {randomSuperhero} from 'superheroes';
// import { log } from 'node:console';

// let sillyName = generateName()

// console.log(sillyName);

// fs.writeFileSync('sillyName.txt', sillyName);

// const randomName = randomSuperhero();
// console.log(randomName);
// fs.writeFileSync('sillyName.txt', `${sillyName} ${randomName}`)


// import qr from 'qr-image';
// import inquirer from 'inquirer';

// inquirer
//     .prompt([
//         { message: 'what do you want to encode your QR code?', name: 'URL' }
//     ])
//     .then((answers) => {
//         const qr_svg = qr.image(answers.URL, { type: 'svg' });
//         qr_svg.pipe(fs.createWriteStream('my.svg'));
//     })


// const express = require('express');
// const bodyParser = require('body-parser');
// const app = express();


// app.use(bodyParser.urlencoded({ extended: false }));

// app.use(bodyParser.json());

// app.post('/login', (req, res) => {
//   console.log(req.body); 
//   res.send('Welcome, ' + req.body.username);
// });

// import express from "express";

// const app = express();
// const port = 3000;

// app.listen(port)

// app.get('/', (_req, res)=>{
//     res.send('<h1> Hey from homepage </h1>');
// });

// app.get('/about', (_req, res)=>{
//     res.send('<h1> Hey from about </h1>');
// });

// app.get('/news', (_req, res)=>{
//     res.send('<h1>News</h1>');
// });

// app.get('/contact', (_req, res)=>{
//     res.send('<h1>Contact</h1>');
// });


// import express from 'express';
// import { dirname } from 'node:path';
// import { fileURLToPath } from 'node:url';
// import bodyParser from 'body-parser';

// const _dirname = dirname(fileURLToPath(import.meta.url));
// const app = express();
// const port = 3000;

// app.use(bodyParser.urlencoded({extended:true}));

// app.get('/', (req, res)=>{
//     res.sendFile(_dirname + '/index.html')
// });

// app.post('/submit', (req, res)=> {
//     console.log(req.body);
// });

// app.listen(port, ()=>{
//     console.log('the app is running on port' + port);  
// })
// app.use(morgan('tiny'));




// app.get('/',(req, res)=>{
//     res.send('Hello world')
// });

// app.listen(port, ()=>{
//     console.log(`server is running on port ${port}`)
// });


// import morgan from 'morgan';
// import express from 'express';
// import { dirname } from 'node:path';
// import { fileURLToPath } from 'node:url';
// import bodyParser from 'body-parser';

// const _dirname = dirname(fileURLToPath(import.meta.url));
// const app = express();
// const port = 3000;
// const password = 'shushanik'
// app.use(bodyParser.urlencoded({extended:true}));

// app.get('/', (req, res)=>{
//     res.sendFile(_dirname + '/index.html')
// });

// function passwordCheck(req, res, next) {
//     if (req.body.password === password) {
//         next();
//     } else {
//         res.redirect('/check');
//     }
// }

// app.post('/check', passwordCheck, (_req, res) => {
//     res.sendFile(_dirname + '/secrets.html');
// });

// app.listen(port, ()=>{
//     console.log('the app is running on port' + port);  
// })