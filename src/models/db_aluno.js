import Sequelize, { Model } from "sequelize";

export default class Aluno extends Model
{
  static init(sequelize)
  {
    super.init({
      nome: { type: Sequelize.STRING, defaultValue: '', validate:
        {
          len: { args: [3, 255], msg: 'Nome muito curto!' }
        }},
      sobrenome: { type: Sequelize.STRING, defaultValue: '', validate:
        {
          len: { args: [3, 255], msg: 'Sobrenome muito curto!' }
        }},
      email: { type: Sequelize.STRING, defaultValue: '', validate:
        {
          isEmail: { msg: 'Email invalido' }
        }},
      idade: { type: Sequelize.INTEGER, defaultValue: '', validate:
        {
          isInt: { msg: 'Idade tem que ser numero inteiro' }
        }},
      peso: { type: Sequelize.FLOAT, defaultValue: '', validate:
        {
          isFloat: { msg: 'Precisa ser numero!' }
        }},
      altura: { type: Sequelize.FLOAT, defaultValue: '', validate:
        {
          isFloat: { msg: 'Precisa ser numero!' }
        }},
    }, {
      sequelize,
    });
    return this;
  }

  static associate(models){
    this.hasMany(models.Photo, {foreignKey: 'aluno_id'});
  }
}
