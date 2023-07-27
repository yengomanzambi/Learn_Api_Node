
const { Pokemon } = require('../db/sequelize')

// http://localhost:4000/api/pokemons
module.exports = (app) => {
  app.get('/api/pokemons', (req, res) => {
    Pokemon.findAll()
      .then(pokemons => {
        const message = 'La liste des pokémons a bien été récupérée.'
        res.json({ message, data: pokemons })
      })
  })
}