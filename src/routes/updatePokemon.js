
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
const { Pokemon } = require('../db/sequelize')
  

// PUT : http://localhost:4000/api/pokemons
module.exports = (app) => {
  app.put('/api/pokemons/:id', (req, res) => {
    const id = req.params.id
    Pokemon.update(req.body, {
      where: { id: id }
    })
    .then(_ => {
      Pokemon.findByPk(id).then(pokemon => {
        const message = `Le pokémon ${pokemon.name} a bien été modifié.`
        res.json({message, data: pokemon })
      })
    })
  })
}