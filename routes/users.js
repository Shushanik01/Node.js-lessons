const { Router } = require('express');
const { param, validationResult } = require('express-validator');

const MockUsers = [
    { id: 1, name: 'user1', displayName: 'Andrew' },
    { id: 2, name: 'user2', displayName: 'Jane' },
    { id: 3, name: 'user3', displayName: 'Austin' }
];

const router = Router();
router.get('/api/users', (req, resp) => {
    const parsedID = parseInt(req.params.id);
    let result = validationResult(req);
    console.log(result);

    if (isNaN(parsedID)) return resp.status(404).send('No such user')
    else {
        const findUser = MockUsers.find((user) => user.id === parsedID)

    }
    if (!findUser) { return resp.sendStatus(404) }

    resp.send(findUser)
});

module.exports = router