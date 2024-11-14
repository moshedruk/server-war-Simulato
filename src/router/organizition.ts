

import express, { Express } from 'express'
import { createorganizition, getorganizition } from '../controllers/organizitionController';
// import { createNewUser, getUsers, login } from '../controllers/userController';
const routerOrganiztions = express.Router();

routerOrganiztions.post('/create',createorganizition)
routerOrganiztions.post('/',getorganizition)

export default routerOrganiztions