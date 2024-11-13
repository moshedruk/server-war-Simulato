import express, { Express } from 'express'
import { changeinventory } from '../controllers/missilesController';
// import { createNewUser, getUsers, login } from '../controllers/userController';
const routermissiles = express.Router();

routermissiles.get('/organization')

routermissiles.post('/',changeinventory)

export default routermissiles