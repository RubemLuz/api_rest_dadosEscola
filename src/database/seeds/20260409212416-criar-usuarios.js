const bcryptjs = require('bcryptjs');


module.exports = {
  up: async (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('users',
    [
      {
      nome: "Rubem",
      email: 'rubem.luz.santos@gmail.com',
      password_hash: await bcryptjs.hash('123456', 8),
      created_at: new Date(),
      updated_at: new Date(),
      },
      {
      nome: "Mariana",
      email: 'Mariana@gmail.com',
      password_hash: await bcryptjs.hash('00000000', 8),
      created_at: new Date(),
      updated_at: new Date(),
      },
      {
      nome: "Lucas",
      email: 'laucas@gmail.com',
      password_hash: await bcryptjs.hash('admin123', 8),
      created_at: new Date(),
      updated_at: new Date(),
      }
    ]);
  },

  down: () => {

  },
};
