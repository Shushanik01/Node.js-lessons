import { Router } from "express";
const userController

const userRouter = Router();

userRouter.get('/', userController.userListGet);
userRouter.get('/create', userController.userCreateGet);
userRouter.post('/create', userController.usersCreatePost);

export default userRouter