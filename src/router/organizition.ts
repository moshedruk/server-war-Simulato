

import express, { Express } from 'express'
import { createorganizition } from '../controllers/organizitionController';
// import { createNewUser, getUsers, login } from '../controllers/userController';
const routerOrganiztions = express.Router();

routerOrganiztions.post('/',createorganizition)

export default routerOrganiztions