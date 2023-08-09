const { User } = require('../db/sequelize')
const bcrypt = require('bcrypt')
const jwt =require("jsonwebtoken")
const privateKey= require("../auth/private_key")
  
module.exports = (app) => {
  app.post('/api/login', (req, res) => {
    User.findOne({ where:{ username: req.body.username}}).then(user => {
      if(!user){
        return res.status(404).json({message:"l'utilisateur n'existe pas "})
      }
      bcrypt.compare(req.body.password, user.password).then(isPasswordValid => {
        if(!isPasswordValid) {
          const message = `Le mot de psse est incorrect veuillez ressayer`;
          return res.json({ message })
        }
        //JWT
        const token=jwt.sign(
          {userId:user.id},
          privateKey,
          {expiresIn:"24h"}
        )
        res.status(200).json({mesage:" l'utilisateur connecter avec succes",data:user,token})
      })
    }).catch(error=>{
      res.status(500).json({message:"l'utilisateur n'est pas pu se connecter",data:error })
    })
  })
}