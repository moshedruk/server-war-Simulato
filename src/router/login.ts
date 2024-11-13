import express, { Express } from 'express'
import { createNewUser } from '../controllers/userController';
// import { createNewUser, getUsers, login } from '../controllers/userController';
const routerUser = express.Router();

routerUser.post('/login')

routerUser.post('/register',createNewUser)

export default routerUser