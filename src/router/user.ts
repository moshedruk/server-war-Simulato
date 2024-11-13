import express, { Express } from 'express'
import { createNewUser, login } from '../controllers/userController';
// import { createNewUser, getUsers, login } from '../controllers/userController';
const routerUser = express.Router();

routerUser.post('/login',login)

routerUser.post('/register',createNewUser)

export default routerUser