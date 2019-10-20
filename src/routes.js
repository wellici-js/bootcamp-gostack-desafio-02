import { Router } from 'express';
import UserController from './app/controllers/UserController';

const routes = Router();

routes.get('/projects', UserController.index);

export default routes;
