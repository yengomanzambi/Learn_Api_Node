module.exports = (sequelize, DataTypes) => {
    return sequelize.define("User", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      username: {
        type: DataTypes.STRING,
        unique:{
          msg: "le nom à été deja pris"
        }
      },
      password: {
        type: DataTypes.STRING
      }
    })
  }