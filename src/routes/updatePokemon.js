
const { Pokemon } = require('../db/sequelize')
  

// PUT : http://localhost:4000/api/pokemons
module.exports = (app) => {
  app.put('/api/pokemons/:id', (req, res) => {
    const id = req.params.id
    Pokemon.update(req.body, {
      where: { id: id }
    })
    .then(_ => {
     return Pokemon.findByPk(id).then(pokemon => {
        if(pokemon===null){
            return res.status(404).json({error: "le pokemon n\'existe"  })
        }
        const message = `Le pokémon ${pokemon.name} a bien été modifié.`
        res.json({message, data: pokemon })
      }).catch(error=>{
        res.status(500).json({message:"Nous avons pas pu modifier un pokemon ressayer plustard"})
      })
    })
  })
}