function proceso1(nombreUsuario){
    let promesa=new Promise(function(resuelve,rechaza){
        setTimeout(function(){
            if(nombreUsuario=="ADMIN"){
                resuelve("Exito")
            }else{
                rechaza("Falla")
            }
        },2000)
    })
    return promesa
}

async function llamandoALaPromesa(){
    console.log("estamos marcando...")
    try{
        let respuesta=await proceso1("ADMIN")
        console.log(respuesta)
    }catch(error){
        console.log(respuesta)
    }

}

llamandoALaPromesa()