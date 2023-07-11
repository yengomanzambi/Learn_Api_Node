exports.success=(message,data)=>{
    return{
        message:message,
        data:data
    }

}

exports.getIdUnic=(pokemons)=>{
    const arrayId= pokemons.map((pokemon)=>pokemon.id)
    const maxId= arrayId.reduce((a,b)=>Math.max(a,b))
    const idUnique=maxId +1
    return idUnique
}

