import userStorage from ''

export const userListGet = (req, res) => {
    res.render('index', {
        title: 'User List',
        users: userStorage.getUsers()
    })
};

export const userCreateGet = (req, res) => {
    res.render("createUser", {
        title: "Create user"
    })
};

export const usersCreatePost = (req, res) => {
    const {firstName, lastName} = req.body;
    userStorage.addUser({firstName, lastName})
    res.redirect('/')
};