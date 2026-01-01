const express = require('express');
const path = require('path');
const { title } = require('process');

const app = express();

app.set('view engine','ejs');

app.set('views', path.join(__dirname, 'views'));

const products = [
    {
        id: 1,
        label: 'product 1'
    },
     {
        id: 2,
        label: 'product 2'
    },
     {
        id: 3,
        label: 'product 3'
    },
];
app.get('/', (req,res)=>{
    res.render('home', {title: 'Home', products: products})
});

app.get('/about',(req,res)=>{
    res.render('about', {title: 'About page'})
});

const port = 3000;
app.listen(port, ()=>{
    console.log(`App is on port ${port}` );
    
})