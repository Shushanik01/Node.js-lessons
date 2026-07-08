import { getAllUsernames, InsertUsername } from "./queries";

async function getUsernames(req, res){
    const usernames = await getAllUsernames();
    res.send(usernames)
};

async function createUsername(req, res){
    const {username} = req.body
    await InsertUsername(username);
    res.send('/')
};

export {
    getUsernames,
    createUsername
}