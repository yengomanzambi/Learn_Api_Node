
module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Pokemon', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    hp: {
      type: DataTypes.INTEGER,
      allowNull: false,
      
    },
    cp: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate:{
      isInt:{msg:"veuillez entrer un nombre svp entier"},
      notNull:{msg:"ce champs est obligatoire svp"}

      }
      
    },
    picture: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    types: {
      type: DataTypes.STRING,
      allowNull: false,
      get(){
      return this.getDataValue('types').split(',')
      },
      set(types){
        this.setDataValue('types',types.join())
      }
    },
  },
  {
    timestamps:true,
    createdAt:'created',
    updatedAt:false
  });
};
