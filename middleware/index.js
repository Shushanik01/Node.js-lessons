import {express} from 'express';

const app = express();

//Authentication Middleware
function auth(req, res, next) {

    const token = req.headers.authorization;

    if (!token) {
        res.status(401).send('Unauthorized user')
    }
    next();
};

// error handling by wrapping controllers in try catch 
async function getAuthorbyId(req, res) {

    const { authorId } = req.params

    try {
        const author = await db.find(Number(authorId));

        if (!author) {
            res.status(404).send('Author not found');
            return
        }
        res.send(`Author: ${author}`)

    } catch (error) {
        console.log(`Error retriving author`, error);
        res.status(500).send('Internal server error')
    }
};

//middleware for handling all errors
app.use((err, req, res, next)=>{

        console.error(err)
        res.status(500).send('Internal server error', err);

        next()
});
