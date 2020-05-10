const Perfil = (sequelize, DataTypes) => {
  
  let perfil = sequelize.define(
    
    
    'Perfil',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      nome:{
        type: DataTypes.STRING(40),
        primaryKey: false,
        allowNull: false,
        defaultValue: 'Anônimo'
      },
      imagem: {
        type: DataTypes.STRING(255),
        primaryKey: false,
        allowNull: false,
        defaultValue: 'no_image.png'
      },
      usuario_id: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
      }
    },
    {
      tableName: 'Perfils',
      timestamps: false,
    }
    );
    
    perfil.associate = (models) => {
      perfil.belongsTo(models.Usuario, { foreignKey: 'id', as: 'usuarios' });
    };
  
    return perfil;
  };
  
  module.exports = Perfil;