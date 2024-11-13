import express, { Express } from 'express'
// import { createNewUser, getUsers, login } from '../controllers/userController';
const routerUser = express.Router();

routerUser.post('/login')

routerUser.post('/register')

export default routerUser