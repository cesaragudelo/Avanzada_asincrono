//necesito ir a netflix y autenticar

function  procesoUno(nombreUsuario,procesoDos){//declarando 1
    setTimeout(function(){
        if(nombreUsuario=="ADMIN"){
            procesoDos("Eito",null)//llamando a 2
        }else{
            procesoDos(null,"Falla")//llamando 2
        }
    },2000)
}

procesoUno("cesar",function(resuelvo,rechazo){//llamando a 1
    if(resuelvo!=null){
        console.log("bienvenido a netflix")
    }else{
        console.log("revisa tus datos")
    }

})