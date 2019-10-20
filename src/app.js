import express from 'express';
// import bodyParser from 'body-parser';
import logs from './app/middlewares/Logs';
import routes from './routes';

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(logs);
    // this.server.use(bodyParser());
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
