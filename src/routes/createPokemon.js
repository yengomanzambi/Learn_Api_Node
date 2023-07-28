
const { Pokemon } = require('../db/sequelize')
  // http://localhost:4000/api/pokemons
module.exports = (app) => {
  app.post('/api/pokemons', (req, res) => {
    Pokemon.create(req.body)
      .then(pokemon => {
        const message = `Le pokémon ${req.body.name} a bien été crée.`
        res.json({ message, data: pokemon })
      }).catch(error=>{
        res.status(500).json({msg: "le pokemon n'a pas été ajouter",data:error})
      })
  })
}