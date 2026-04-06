import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Aluno from '../models/db_aluno';
import User from '../models/db_user';

const models = [Aluno, User];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
