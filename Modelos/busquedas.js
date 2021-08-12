
const axios = require('axios');

class Busquedas{



    historial=["Madrid", "San José", "Barcelona"];
    constructor(){

        //leer db si existe
    }

    get paramsMapbox(){ //Getter

        return {
            //Introducimos nuestra variable de entorno
            'access_token':process.env.MAPBOX_KEY || "",
                'limit': 5,
                'language':'es'


        }
    }

    async ciudad (lugar=""){
        try{
        //peticion http

        const instance=axios.create({

            baseURL:`https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json`,
            params:this.paramsMapbox
        });

            const respuesta= await instance.get();
            // const respuesta=await axios.get("https://api.mapbox.com/geocoding/v5/mapbox.places/9%20rue%20Alphonse%20Penaud%20Paris,%2075020%20France.json?access_token=pk.eyJ1IjoidmVyc3Rha2VuIiwiYSI6ImNrczkwajdudTBsdmYycXBmaGlzemsyZHkifQ.muwEN-gxanQwxixQgX9pYg&limit=5")
            
            return respuesta.data.features.map( lugar =>({
                //Con map hacemos seleccion del array, con ({}) devolvemos un objeto con las propiedades que nos interesan

                id:lugar.id,
                nombre:lugar.place_name,
                latitud:lugar.center[1],
                longitud:lugar.center[0]


            }));

           

        }catch (error){

            return [];
        }

        
    }





}



module.exports=Busquedas;


