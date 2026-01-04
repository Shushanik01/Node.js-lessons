const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
const hashedPassword = require('./mongoose/bcrypt.js')
const userRoutes = require('../routes/users.js')
const MongoStore = require('connect-mongo')
const app = express();
app.use(express.json());

app.use(userRoutes)
const mongoURI = 'mongodb+srv://shushanikarakl62_db_user:shushanik2001@cluster0.8hkju2f.mongodb.net/'
mongoose.connect(mongoURI)

app.use(session({
  secret: 'Shushanik the dev',
  saveUninitialized: true,
  resave: false,
  cookie: {
    maxAge: 60000 * 60 
  },
  store: MongoStore.create({
    client: mongoose.connection.getClient()
  })
}));
const passport = require('./local-strategy.js')
app.use(passport.initialize());
app.use(passport.session());



const PORT = process.env.PORT || 3000;

let MockUsers =  [
  {
    id: 1,
    username: "shushanik",
    displayName: "Shushanik Petrosyan",
    password: "dev123"
  },
  {
    id: 2,
    username: "anna",
    displayName: "Anna Grigoryan",
    password: "anna2024"
  },
  {
    id: 3,
    username: "maria",
    displayName: "Maria Sargsyan",
    password: "maria@pass"
  },
  {
    id: 4,
    username: "tigran",
    displayName: "Tigran Hakobyan",
    password: "tigran456"
  },
  {
    id: 5,
    username: "nare",
    displayName: "Nare Manukyan",
    password: "nare789"
  },
  {
    id: 6,
    username: "davit",
    displayName: "Davit Gevorgyan",
    password: "davit321"
  },
  {
    id: 7,
    username: "lusine",
    displayName: "Lusine Hovhannisyan",
    password: "lusine111"
  },
  {
    id: 8,
    username: "armen",
    displayName: "Armen Harutyunyan",
    password: "armen999"
  },
  {
    id: 9,
    username: "gohar",
    displayName: "Gohar Asatryan",
    password: "gohar555"
  },
  {
    id: 10,
    username: "hayk",
    displayName: "Hayk Vardanyan",
    password: "hayk2024"
  }
]


app.get('/', (req, resp) => {
  console.log('Session:', req.session);
  console.log('Session ID:', req.sessionID);
  req.session.visited = true
  resp.status(200).send('Hello World!');
});


app.get('/api/users', (req, resp) => {
  const { filter, value } = req.query;
  
  if (!filter || !value) {
    return resp.status(200).send(MockUsers);
  }
  
  const filteredUsers = MockUsers.filter((user) => 
    user[filter] && user[filter].includes(value)
  );
  
  return resp.status(200).send(filteredUsers);
});


app.get('/api/users/:id', (req, resp) => {
  const parsedID = parseInt(req.params.id);
  
  if (isNaN(parsedID)) {
    return resp.status(400).send({ error: 'Invalid ID' });
  }
  
  const findUser = MockUsers.find((user) => user.id === parsedID);
  
  if (!findUser) {
    return resp.status(404).send({ error: 'User not found' });
  }
  
  return resp.status(200).send(findUser);
});


app.get('/api/products', (req, resp) => {
  resp.status(200).send([
    { id: 1, productName: 'productOne' },
    { id: 2, productName: 'productTwo' },
    { id: 3, productName: 'productThree' }
  ]);
});


app.post('/api/users', (req, resp) => {
  const { body } = req;
//   body.passport = hashedPassword(passport)
  const newUser = {
    id: MockUsers[MockUsers.length - 1].id + 1,
    ...body
  };
  
  MockUsers.push(newUser);
  return resp.status(201).send(newUser);
});


app.put('/api/users/:id', (req, resp) => {
  const { body, params: { id } } = req;
  const parsedID = parseInt(id);
  
  if (isNaN(parsedID)) {
    return resp.status(400).send({ error: 'Invalid ID' });
  }
  
  const findUserIndex = MockUsers.findIndex((user) => user.id === parsedID);
  
  if (findUserIndex === -1) {
    return resp.status(404).send({ error: 'User not found' });
  }
  
  MockUsers[findUserIndex] = { id: parsedID, ...body };
  return resp.status(200).send(MockUsers[findUserIndex]);
});


app.patch('/api/users/:id', (req, resp) => {
  const { body, params: { id } } = req;
  const parsedID = parseInt(id);
  
  if (isNaN(parsedID)) {
    return resp.status(400).send({ error: 'Invalid ID' });
  }
  
  const findUserIndex = MockUsers.findIndex((user) => user.id === parsedID);
  
  if (findUserIndex === -1) {
    return resp.status(404).send({ error: 'User not found' });
  }
  
  MockUsers[findUserIndex] = { ...MockUsers[findUserIndex], ...body };
  return resp.status(200).send(MockUsers[findUserIndex]);
});


app.delete('/api/users/:id', (req, resp) => {
  const { params: { id } } = req;
  const parsedID = parseInt(id);
  
  if (isNaN(parsedID)) {
    return resp.status(400).send({ error: 'Invalid ID' });
  }
  
  const findUserIndex = MockUsers.findIndex((user) => user.id === parsedID);
  
  if (findUserIndex === -1) {
    return resp.status(404).send({ error: 'User not found' });
  }
  
  const deletedUser = MockUsers.splice(findUserIndex, 1)[0];
  return resp.status(200).send({ 
    message: 'User deleted', 
    user: deletedUser 
  });
});

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});

// app.post('/api/users/auth', (req, resp)=>{
//     const {body : {username, password} } = req;
//     let findUser = MockUsers.find((user)=> user.username === username);
//     if(!findUser) return resp.status(401).send({msg: 'No such user found'});
//     if(findUser.password !== password) return resp.status(401).send({msg: 'No such user found'});

//     req.session.user = findUser;
//     return resp.status(200).send(findUser)
// })

app.post('/api/auth', passport.authenticate('local'), (request, response)=>{
response.sendStatus(200)
})