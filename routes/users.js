const { Router } = require('express');
const { param, validationResult } = require('express-validator');
const User = require('../REST-API-DEVELOPMENT/mongoose/schema.js');
// const {hashedPassword} = require('./mongoose/bcrypt.js');
const hashedPassword = require('../REST-API-DEVELOPMENT/mongoose/bcrypt.js');

const MockUsers = [
    { id: 1, name: 'user1', displayName: 'Andrew' },
    { id: 2, name: 'user2', displayName: 'Jane' },
    { id: 3, name: 'user3', displayName: 'Austin' }
];


const router = Router();
router.get('/api/users', (req, resp) => {
    const parsedID = parseInt(req.params.id);
    let result = validationResult(req);
    console.log(result);

    if (isNaN(parsedID)) return resp.status(404).send('No such user')
    else {
        const findUser = MockUsers.find((user) => user.id === parsedID)

    }
    if (!findUser) { return resp.sendStatus(404) }

    resp.send(findUser)
});

router.post('/api/users',async(req, resp)=>{
   try{
    const {username, password, displayName} = req.body;

    const hashPassword = await hashedPassword(password);

    const user = new User({
        username,
        password: hashPassword,
        displayName
    })
    await user.save()
   resp.status(201).json({
      message: 'User registered successfully',
      user: {
        id: user._id,
        username: user.username
      }
    });
   }catch(err){
    resp.status(400).json({ error: err.message })
}

}) 
module.exports = router