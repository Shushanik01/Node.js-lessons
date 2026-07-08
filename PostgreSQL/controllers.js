import { getAllUsernames, InsertUsername } from "./queries.js";

async function getUsernames(req, res) {
    const usernames = await getAllUsernames();
    res.send(usernames)
};

async function createUsername(req, res) {
    const { username } = req.body
    if (username?.trim()) {
        await InsertUsername(username);

    }
    res.redirect('/')
};

export {
    getUsernames,
    createUsername
}