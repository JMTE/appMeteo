
const axios = require('axios');

class Busquedas{



    historial=["Madrid", "San José", "Barcelona"];
    constructor(){

        //leer db si existe
    }

    async ciudad (lugar=""){

        //peticion http

        try{
            const respuesta=await axios.get("https://api.mapbox.com/geocoding/v5/mapbox.places/9%20rue%20Alphonse%20Penaud%20Paris,%2075020%20France.json?access_token=pk.eyJ1IjoidmVyc3Rha2VuIiwiYSI6ImNrczkwajdudTBsdmYycXBmaGlzemsyZHkifQ.muwEN-gxanQwxixQgX9pYg&limit=5")

            console.log(respuesta.data);

            return []; //devuelve todas las ciudades que se corresponden con lugar

        }catch (error){

            return [];
        }

        
    }





}



module.exports=Busquedas;


