const passport = require('passport');
const {Strategy} = require('passport-discord');
const discordUser = require('./discord-user-mongoose')

passport.use(new Strategy({
    clientID: '128723445462720978',
    clientSecret: '1lsw273839sbhsbh229svcd',
    callbackURL: 'https://localhost:3000/api/auth',
    scope:['identify']
}, async(accessToken, refreshToken, profile, done)=>{
    const findUser = await discordUser.findOne({discordID: profile.id})
    if(!findUser){
        const newUser = new discordUser({
            username: profile.username,
            discordID: profile.id
        })
         const newSavedUser = await newUser.save();
         done(null, newSavedUser)
    }
   
}))