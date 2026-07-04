//Authentication Middleware
function auth(req, res, next){

    const token = req.headers.authorization;

    if(!token){
        res.status(401).send('Unauthorized user')
    }
    next();
}