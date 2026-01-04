const bcrypt = require('bcrypt');

const soltRounds = 10

 const hashedPassword = (password)=>{
    const salt = bcrypt.genSaltSync(soltRounds);
   return bcrypt.hashSync(password, salt) 
}
module.exports = hashedPassword