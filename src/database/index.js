import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Aluno from '../models/db_aluno';
import User from '../models/db_user';
import Photo from '../models/db_photo';

const models = [Aluno, User, Photo];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));

