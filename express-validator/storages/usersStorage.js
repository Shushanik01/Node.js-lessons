import { body, validationResult, matchedData } from "express-validator";

class UserStorage {
    constructor() {
        this.storage = {}
        this.id = 0
    };

    addUser({ firstName, lastName }) {
        const id = this.id
        this.storage[id] = { id, firstName, lastName };
        this.id++
    };

    getUsers() {
        return Object.values(this.storage)
    };

    getUser(id) {
        return this.storage[id]
    };

    updateUser(id, { firstName, lastName }) {
        this.storage[id] = { id, firstName, lastName }
    };

    deleteUser(id) {
        delete this.storage[id]
    }
};

let userStorage = new UserStorage
export default userStorage

const alphaErr = 'must only contain letters';
const lengthErr = 'should contain 8-12 characters'

const validateUser = [
    body("firstName").trim()
        .isAlpha().withMessage(`First name ${alphaErr}`)
        .isLength({ min: 8, max: 12 }).withMessage(`First name ${lengthErr}`),
    body("lastName").trim()
        .isAlpha().withMessage(`Last name ${alphaErr}`)
        .isLength({ min: 1, max: 10 }).withMessage(`Last name ${lengthErr}`),
];

export const usersCreatePost = [
    validateUser,
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).render("createUser", {
                title: 'Create user',
                errors: errors.array()
            });
        }
        const { firstName, lastName } = matchedData(req);
        userStorage.addUser({ firstName, lastName });
        res.redirect('/')

    }
]