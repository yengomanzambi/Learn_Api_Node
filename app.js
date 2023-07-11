const pokemons=require("./pokemon")
const {success,getIdUnic} = require('./helper')
const morgan=require('morgan')
const favicon= require('serve-favicon')
const bodyParser=require('body-parser')
const path= require('path')

const express= require("express")
const app= express()
const port = 4000


app
.use(favicon(path.join(__dirname,'favicon.ico')))

.use(morgan('dev'))
.use(bodyParser.json())


app.get("/api/pokemons",(req,res)=>{
const message=" voici la liste de tous les pokemon"
  res.json(success(message,pokemons))
   
})
 app.get("/api/pokemon/:id",(req,res)=>{
    const message="voici l'id specifique que vous avez demandez"
   const id =parseInt(req.params.id) 
   const pokemon= pokemons.find((pokemon=>{
   return(
    pokemon.id===id
   )

   } ))
   res.json(success(message,pokemon))
       
    })
    app.post("/api/pokemons",(req,res)=>{
        const id=getIdUnic(pokemons)
       const  pokemonCreated={...req.body,...{id:id, created: new Date()}}
        pokemons.push(pokemonCreated)
        const message=`le pokemon ${pokemonCreated.name} à été ajouter`
        res.json(success(message,pokemonCreated))

    })
    app.put("/api/pokemon/:id",(req,res)=>{
        const id=parseInt(req.params.id)
        const pokemonUpdated={...req.body,id:id}
      pokemons.map(pokemon=>{
    
            return pokemon.id===id ? pokemonUpdated:pokemon 
        })
        const message= `le pokemon  ${pokemonUpdated.name} à été modifier`
        res.json(success(message,pokemonUpdated))
    })
    app.delete("/api/pokemon/:id",(req,res)=>{
        const id=parseInt(req.params.id)
        const pokemonDeleted= pokemons.find(pokemon=>pokemon.id===id)
        pokemons.filter(pokemon=>pokemon.id!==id)

        const message=`le pokemon ${pokemonDeleted.name} à été supprimer`
        res.json(success(message,pokemonDeleted))
    })



app.listen(port,()=>console.log(` l'appli tourne sur localhost ${port}`))





