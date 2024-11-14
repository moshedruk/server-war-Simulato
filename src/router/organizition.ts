

import express, { Express } from 'express'
import { createorganizition, getorganizition, getorganizitionbyId } from '../controllers/organizitionController';
// import { createNewUser, getUsers, login } from '../controllers/userController';
const routerOrganiztions = express.Router();

routerOrganiztions.post('/create',createorganizition)
routerOrganiztions.post('/',getorganizition)
routerOrganiztions.post('/id',getorganizitionbyId)

export default routerOrganiztions