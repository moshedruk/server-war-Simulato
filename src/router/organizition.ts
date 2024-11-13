

import express, { Express } from 'express'
import { createorganizition, getorganizition } from '../controllers/organizitionController';
// import { createNewUser, getUsers, login } from '../controllers/userController';
const routerOrganiztions = express.Router();

routerOrganiztions.post('/',createorganizition)
routerOrganiztions.get('/',getorganizition)

export default routerOrganiztions