const express = require('express');
const { title } = require('process');
const app = express();

app.use(express.json());

let books = [
    {
        id: 1,
        title: 'Book 1'
    },
    {
        id: 2,
        title: 'Book 2'
    },
    {
        id: 3,
        title: 'Book 3'
    },
];

app.get('/books', (req, res)=>{
    res.json({
        message: 'Welcome to bookstore API'
    })
});

app.get('/get',(req,res)=>{
    res.json(books)
});

const PORT = 3000

app.listen(PORT, ()=>{
    console.log('Applications is on port 3000');
    
});

app.get('/get/:id',(req,res)=>{
    let book = books.find(book=> book.id === req.params.id);

    if(book){
        res.status(200).json(book)
    } else{
        res.status(404).json({
            message: 'Book not found'
        })
    }
})