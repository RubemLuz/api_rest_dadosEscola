import dotenv from 'dotenv';
dotenv.config();

import './src/database';

import express from 'express';
import routesHome from './src/routes/R_home';

class App {
  constructor()
  {
    this.app = express();
    this.middleware();
    this.routes();
  }

  middleware()
  {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes()
  {
    this.app.use('/', routesHome);
  }
}

export default new App().app;
