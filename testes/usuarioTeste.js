const { sequelize, Usuario } = require('../models');

Usuario.findAll().then(
  result => {
    console.log(result.map(u => u.toJSON()));
    sequelize.close();
  }
);
