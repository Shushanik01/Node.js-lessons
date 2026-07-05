import express from 'express';
const app = express();
import path from 'path';

const userRouter
app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "ejs");
app.use(express.urlencoded({extended: true}));
app.use('/', userRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log(`App is running on port ${PORT}`);
    
})