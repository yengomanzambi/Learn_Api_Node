

const morgan=require('morgan')
const favicon= require('serve-favicon')
const bodyParser=require('body-parser')
const path= require('path')
const sequelize=require('./src/db/sequelize')

const express= require("express")
const app= express()
const port = 4000



// Connexion avec la base de données
sequelize.initDb()


//Middleware
app
.use(favicon(path.join(__dirname,'favicon.ico')))
.use(morgan('dev'))
.use(bodyParser.json())

// End points
require('./src/routes/findAllPokemons')(app)
require('./src/routes/findByPkPokemon')(app)
require('./src/routes/createPokemon')(app)
require('./src/routes/updatePokemon')(app)
require('./src/routes/deletePokemon')(app)
require('./src/routes/login')(app)

// management error 

app.use(({res})=>{
    const message="impossible de trouver la ressource démande essaye une atre URL."
    res.status(404).json({message})
})




app.listen(port,()=>console.log(` l'appli tourne sur localhost ${port}`))





