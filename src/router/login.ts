import express, { Express } from 'express'
// import { createNewUser, getUsers, login } from '../controllers/userController';
const routerlogin = express.Router();

routerlogin.post('/login')

routerlogin.post('/register')

export default routerlogin