
const axios = require('axios');

class Busquedas{



    historial=["Madrid", "San José", "Barcelona"];
    constructor(){

        //leer db si existe
    }

    async ciudad (lugar=""){

        //peticion http

        const respuesta=await axios.get("https://reqres.in/api/users?page=2")

        console.log(respuesta.data);

        return []; //devuelve todas las ciudades que se corresponden con lugar
    }





}



module.exports=Busquedas;


