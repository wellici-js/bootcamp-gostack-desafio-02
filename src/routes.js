import { Router } from 'express';
import StudentController from './app/controllers/StudentController';
import SessionController from './app/controllers/SessionController';

const routes = Router();

routes.post('/users', StudentController.store);
routes.post('/sessions', SessionController.store);

export default routes;
