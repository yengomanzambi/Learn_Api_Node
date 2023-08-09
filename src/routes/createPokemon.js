
const { Pokemon } = require('../db/sequelize')
const {ValidationError,UniqueConstraintError}=require('sequelize')
const auth=require("../auth/auth")
  //POST : http://localhost:4000/api/pokemons
module.exports = (app) => {
  app.post('/api/pokemons',auth, (req, res) => {
    Pokemon.create(req.body)
      .then(pokemon => {
        const message = `Le pokémon ${req.body.name} a bien été crée.`
        res.json({ message, data: pokemon })
      }).catch(error=>{
        if(error instanceof ValidationError){
         return res.status(400).json({message: error.message,data:error})
        }
        if(error instanceof UniqueConstraintError ){
          return res.status(400).json({message: error.message,data:error})
         }
        res.status(500).json({msg: "le pokemon n'a pas été ajouter",data:error})
      })
  })
}