

import express, { Express } from 'express'
import { changeinventory } from '../controllers/missilesController';
import { getevent } from '../controllers/eventControler';
// import { createNewUser, getUsers, login } from '../controllers/userController';
const routerevent = express.Router();



routerevent.post('/',getevent)

export default routerevent