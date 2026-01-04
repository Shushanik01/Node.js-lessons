const mongoose = require('mongoose');

const DiscordUserSchema = new mongoose.Schema({
    username: String,
    discordID: Number
});

const discordUser = mongoose.model('discordUser', DiscordUserSchema);

module.exports = discordUser