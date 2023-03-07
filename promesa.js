//una promesa es un collback
//una promesa es una funcion asincrona que facilita su escritura a traves
//de 2 callback (resolve y reject)

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

proceso1("cesar")
.then(function(respuesta){console.log(respuesta)})//camino del exito
.catch(function(respuesta){console.log(respuesta)})//camino de rechazo