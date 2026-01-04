const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;


let MockUsers = [
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
];


passport.use(new LocalStrategy((username, password, done) => {
    try {
        console.log(`username: ${username}`);
        console.log(`password: ${password}`);


        let findUser = MockUsers.find((user) => user.username === username);
        if (!findUser) throw new Error('No such user');
        if (findUser.password !== password) throw new Error('Wrong credentials');
        done(null, findUser)
    } catch (error) {
        done(error, null)
    }
}));

passport.serializeUser((user, done) => {
    console.log('Inside Serialize user');
    console.log(`${user}`);
    
    done(null, user.id)
});

passport.deserializeUser((id, done) => {
    console.log('Inside deserialize user');
    console.log(`Deserialize user id ${id}`);
    
    try {
        const findUser = MockUsers.find((user) => user.id === id);
        if (!findUser) throw new Error('No such User found');
        done(null, findUser)
    } catch (error) {
        done(error, null)
    }
})
module.exports = passport