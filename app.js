import dotenv from 'dotenv';
import { resolve } from "path";
dotenv.config();

import './src/database';

import express from 'express';
import routesHome from './src/routes/R_home';
import routesUser from './src/routes/R_user';
import routesToken from './src/routes/R_token';
import routesAluno from './src/routes/R_aluno';
import routesPhoto from './src/routes/R_photo';

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
    this.app.use(express.static(resolve(__dirname, 'uploads')));
  }

  routes()
  {
    this.app.use('/', routesHome);
    this.app.use('/user', routesUser);
    this.app.use('/token', routesToken);
    this.app.use('/aluno/', routesAluno);
    this.app.use('/photo/', routesPhoto);
    }
}

export default new App().app;
