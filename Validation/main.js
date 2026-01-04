const { query, validationResult, body, checkSchema } = require('express-validator');
const express = require('express');
import { userValidationSchema } from './ValidationSchema';

const app = express()
let MockUsers = [{
    id: 1, name: 'user1', displayName: 'Andrew'
}, {
    id: 2, name: 'user2', displayName: 'Jane'
}, {
    id: 3, name: 'user3', displayName: 'Austin'
}
];

app.get('/api/users/:id', query('filter').isString().notEmpty().isLength({min: 3, max: 10}), (req, resp)=>{
    const parsedID = parseInt(req.params.id);
    let result = validationResult(req);
    console.log(result);
    
    if(isNaN(parsedID)) return resp.status(404).send('No such user')
     else{  const findUser = MockUsers.find((user)=> user.id === parsedID)
    resp.send(findUser)
    }
    if(!findUser)return resp.sendStatus(404)
});

app.post('/api/users', 
    body('username')
    .notEmpty()
    .withMessage('Username is required')
    .isLength({min:3, max:32})
    .withMessage('Username should be at least 3 charachters with the max of 32 characters')
    .isString(),
    (req, resp)=>{
        const result = validationResult(req)
    const {body} = req
    if(!result.notEmpty()){
        return resp.sendStatus(404).send({Error: result.array()})
    }
    const newUser = {id: MockUsers[MockUsers.length - 1].id + 1, ...body};
    MockUsers.push(newUser);
    return resp.status(201).send(newUser)
});

app.post('/api/users', 
 checkSchema(userValidationSchema),
    (req, resp)=>{
        const result = validationResult(req)
    const {body} = req
    if(!result.notEmpty()){
        return resp.sendStatus(404).send({Error: result.array()})
    }
    const newUser = {id: MockUsers[MockUsers.length - 1].id + 1, ...body};
    MockUsers.push(newUser);
    return resp.status(201).send(newUser)
});