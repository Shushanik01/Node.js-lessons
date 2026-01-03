const express = require('express');

const app = express();
app.use(express.json())

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);

})
let MockUsers = [{
        id: 1, name: 'user1', displayName: 'Andrew'
    }, {
        id: 2, name: 'user2', displayName: 'Jane'
    }, {
        id: 3, name: 'user3', displayName: 'Austin'
    }
    ]
app.get('/', (req, resp) => {
    resp.status(200).send('Hello World!')
});

app.get('/api/users', (req, resp) => {
    resp.status(200).send(MockUsers)
});

app.get('/api/products', (req, resp)=>{
    resp.status(200).send([{
        id: 1, productName: 'productOne'
    },
{
        id: 2, productName: 'productTwo'
    },
    {
        id: 3, productName: 'productTree'
    }
])
});

app.get('/api/users/:id',(req, resp)=>{
    const parsedID = parseInt(req.params.id);
    if(isNaN(parsedID)) return resp.status(404).send('No such user')
     else{  const findUser = MockUsers.find((user)=> user.id === parsedID)
    resp.send(findUser)
    }
    if(!findUser)return resp.sendStatus(404)
});

app.get('/api/users',(req,resp)=>{
    const {query : filter, value} = req
    if(!filter && !value) return resp.send(MockUsers);
    if(value && filter){
        const findfilteredUser = MockUsers.find((user)=> user[filter].includes(value));
        resp.send(findfilteredUser)
    }
});

app.post('/api/users',(req, resp)=>{
    const {body} = req
    const newUser = {id: MockUsers[MockUsers.length - 1].id + 1, ...body};
    MockUsers.push(newUser);
    return resp.status(201).send(newUser)
});

app.put('/api/users/:id',(req, resp)=>{
    const {body,
        params: {id}
    } = req
    let parsedID = parseInt(id);
    if(isNaN(parsedID)) return resp.sendStatus(400)
        const findUserIndex = MockUsers.findIndex((user)=> user.id === parsedID)
    if(findUserIndex === -1) return resp.status(400)
        MockUsers[findUserIndex] = {id: parsedID, ...body} 
    return resp.status(200)
});

app.patch('/api/users/:id',(req, resp)=>{
    const {body,
        params: {id}
    } = req
    let parsedID = parseInt(id);
    if(isNaN(parsedID)) return resp.sendStatus(400)
        const findUserIndex = MockUsers.findIndex((user)=> user.id === parsedID)
    if(findUserIndex === -1) return resp.status(400)
        MockUsers[findUserIndex] = {...MockUsers[findUserIndex], ...body} 
    return resp.status(200)
});

app.delete('/api/users/:id',(req, resp)=>{
    const {params: {id}} = req
     let parsedID = parseInt(id);
    if(isNaN(parsedID)) return resp.sendStatus(400)
       let deletedUsers = MockUsers.filter((user)=> user.id !== parsedID)
        return resp.send(deletedUsers)
})