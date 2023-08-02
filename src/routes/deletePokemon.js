
const { Pokemon } = require('../db/sequelize')
   // DELETE : http://localhost:4000/api/pokemon
module.exports = (app) => {
  app.delete('/api/pokemon/:id', (req, res) => {
    Pokemon.findByPk(req.params.id).then(pokemon => {
      const pokemonDeleted = pokemon;
      Pokemon.destroy({
        where: { id: pokemon.id }
      })
      .then(_ => {
        const message = `Le pokémon avec l'identifiant n°${pokemonDeleted.id} a bien été supprimé.`
        res.json({message, data: pokemonDeleted })
      })
    })
  })
}



// const { Pokemon } = require('../db/sequelize')
//   //DELETE : http://localhost:4000/api/pokemons
// module.exports = (app) => {
//   app.delete('/api/pokemons/:id', (req, res) => {
//     Pokemon.findByPk(req.params.id).then(pokemon => {
//         if(pokemon===null){
//             return res.status(404).json({error: "le pokemon n\'existe"  })
//         }
//         console.log('fff'+pokemon)
//       const pokemonDeleted = pokemon;
//      return Pokemon.destroy({
//         where: { id: pokemon.id }
//       })
//       .then(_ => {
//         const message = `Le pokémon avec l'identifiant n°${pokemonDeleted.id} a bien été supprimé.`
//         res.json({message, data: pokemonDeleted })
//       }).catch(error=>{
//         res.status(500).json({error:"Nous avons pas pu supprimer un pokemon ressayer plustard"})
//       })
//     })
//   })
// }