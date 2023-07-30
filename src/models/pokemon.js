
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
      validate:{
        notEmpty:{msg:"le champs ne peu pas etre vide"},
        notNull:{msg:"ce champs est obligatoire svp"}
  
        }
    
        
     
    },
    hp: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate:{
        isInt:{msg:"veuillez entrer un nombre svp entier"},
        notNull:{msg:"ce champs est obligatoire svp"},
        min:{
          args:[0],
          msg:"la taille du point de vie doit etre superieur ou égale à 0"
        },
        max:{
          args:[999],
          msg:"la taille du point de vie doit etre inferieur ou égale à 999"
        }
  
      }
      
    },
    cp: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate:{
      isInt:{msg:"veuillez entrer un nombre svp entier"},
      notNull:{msg:"ce champs est obligatoire svp"},
      min:{
        args:[0],
        msg:"ce champs doit etre superieur ou égale à 0"
      },
      max:{
        args:[99],
        msg:"ce champs doit étre inferieur ou égale à 99"
      }
      }
    },
    picture: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        isUrl:{msg:"veuillez entrez un url valide"}
      }
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
