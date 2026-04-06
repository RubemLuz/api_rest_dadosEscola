import dotenv from 'dotenv';
dotenv.config();

import './src/database';

import express from 'express';
import routesHome from './src/routes/R_home';
import routesUser from './src/routes/R_user';


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
    this.app.use('/user', routesUser);
  }
}

export default new App().app;
