const { Pokemon } = require('../db/sequelize')
const {Op} =require("sequelize")
const auth= require("../auth/auth")
// http://localhost:4000/api/pokemons
module.exports = (app) => {
  app.get('/api/pokemons',auth, (req, res) => {
    if(req.query.name){
      const name=req.query.name
      const limit = parseInt(req.query.limit) || 5
      if(name.length<2){
        return res.status(400).json({message:"le terme de votre recherche doit avoir au moins 2 caractere" })
      }
      return Pokemon.findAndCountAll({where:
        {
          name:{
        [Op.like]:`%${name}%`
      }
    },
    order:["name"],
  limit:limit})
      .then(({count,rows})=>{
        res.status(200).json({message:`il y'a ${count} pokemons correspondant au terme de votre recherche ${name}`,data:rows})
      })
    }
    Pokemon.findAll({order:["name"]})
      .then(pokemons => {
        res.json({ message:"La liste des pokémons a bien été récupérée en ordre alphabetique.", data: pokemons })
      }).catch(error=>{
        res.status(500).json({message:"Nous avons pas pus recuperer la listes de pokemons essayer plustard ",data:error})
      })
  })
}