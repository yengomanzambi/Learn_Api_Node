const { Sequelize, DataTypes } = require('sequelize')
const PokemonModel = require('../models/pokemon')
const UserModel = require('../models/user')
const pokemons = require('./pokemon')
const bcrypt=require('bcrypt')
const sequelize = new Sequelize('b3q7hsm6lzpghkm7zlyu','uwksfbgxqkuypjwu','DKG2T4XPZz2jbQz3HKXo',{
  host: 'b3q7hsm6lzpghkm7zlyu-mysql.services.clever-cloud.com',
  dialect: 'mariadb',
  dialectOptions:{
    timezone: 'Etc/GMT-2',
  },
  logging: false
})
sequelize.authenticate()
.then(()=>console.log("connexion à la base de données reussi"))
.catch((error)=>console.log(`connexion echoue ${error}`))
const Pokemon = PokemonModel(sequelize, DataTypes)
const User= UserModel(sequelize,DataTypes)
const initDb = () => {
  return sequelize.sync({force: true}).then(_ => {
    pokemons.map(pokemon => {
      Pokemon.create({
        name: pokemon.name,
        hp: pokemon.hp,
        cp: pokemon.cp,
        picture: pokemon.picture,
        types: pokemon.types
      }).then(pokemon => console.log(pokemon.toJSON()))
    })
bcrypt.hash("gracius",10).then(hash=>{
  User.create({
    username:"gracius",
    password:hash
  }).then(user=>{
    console.log(user.toJSON())
  })

})
    
    console.log('La base de donnée a bien été initialisée !')
  })
} 
module.exports = { 
  initDb, Pokemon,User
}