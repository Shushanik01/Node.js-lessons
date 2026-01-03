const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://shushanikarakl62_db_user:K0YLJGE6KQDwBmnx@cluster0.8hkju2f.mongodb.net/').then(
    () => {
        console.log('Database connected successfully');
    }
).catch((e) => console.log(e));

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
    isActive: Boolean,
    tags: [String],
    createdAd: { type: Date, default: Date.now() }
});

const User = mongoose.model('User', userSchema)

async function searchQueries() {
    try {
        const newUser = await User.create({
            name: 'Shushanik',
            email: '@example.com',
            age: 24,
            isActive: true,
            tags: [developer],
        });
        console.log('A new user created', newUser);
        
    } catch (e) {
        console.log('Error', e);

    } finally {
        await mongoose.connection.close()
    }
} 