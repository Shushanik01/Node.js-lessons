import dotenv from 'dotenv';

dotenv.config();
 const {default: app} = await import('./restApi/app.js');