
const { Pokemon } = require('../db/sequelize')

// http://localhost:4000/api/pokemons
module.exports = (app) => {
  app.get('/api/pokemons', (req, res) => {
    Pokemon.findAll()
      .then(pokemons => {
        
        res.json({ message:"La liste des pokémons a bien été récupérée.", data: pokemons })
      }).catch(error=>{
        res.status(500).json({message:"Nous avons pas pus recuperer la listes de pokemons essayer plustard ",data:error})
      })
  })
}