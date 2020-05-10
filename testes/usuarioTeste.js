const { sequelize, Usuario, Perfil } = require('../models');

/*
Usuario.findAll().then(
  result => {
    console.log(result.map(u => u.toJSON()));
    sequelize.close();
  }
  );
  */
  
  async function listar(){
    try {
      let lista = await Usuario.findAll(
        {
          include: [{
            model: Perfil,
            as: 'perfis',
            include: 'usuarios'
          }]
        });
      for (let usuario of lista) {
        console.log('---------------------------------------');
        console.log(`Nome: ${usuario.perfis[0].nome}`);
        console.log(`Email: ${usuario.email}`);
        console.log(`Senha: ${usuario.senha}`);
        console.log('---------------------------------------');
      }
      } catch (error) {
        console.log(error);
      }    
      sequelize.close();
    }
    
    listar();