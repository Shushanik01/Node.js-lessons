const express = require('express');

const app = express();

app.use((req,res, next)=>{
    if(req.user){
        next()
    }else{
        res.send('LogIn–ը պարտադիր է')
    }
} );

app.get('/profile', (req,res)=>{
    app.send('Your profile')
});

