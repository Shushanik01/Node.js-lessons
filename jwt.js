import express from 'express';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const app = express();
app.use(express.json());

const SECRET = '123';

mongoose.connect("mongodb:localhost:27017/test");

const User = mongoose.model('User', {
    username: String,
    password: String
});

app.post('/register', async(req, res)=>{
    const hash = await bcrypt.hash(req.body.password, 10);

    const user = await User.create({
        username: req.body.username,
        
    })
})