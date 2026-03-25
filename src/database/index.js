import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Aluno from '../models/db_aluno';

const models = [Aluno];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
