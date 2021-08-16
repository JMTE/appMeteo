
const fs=require('fs');


const axios = require('axios');



class Busquedas{



    historial=[];

    databasePath='./Database/database.json';
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

    get paramsMeteo(){

        //Introducimos nuestra variabla de entorno

        return{

            appid:process.env.OPENWEATHER_KEY || "",
           units:'metric',
           lang:'es'
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
                lat:lugar.center[1],
                lon:lugar.center[0]


            }));

           

        }catch (error){

            return [];
        }

        
    }


    async climaLugar(lat,lon){

        try{

            //instancia de axios.create

            const instance=axios.create({

                baseURL:`https://api.openweathermap.org/data/2.5/weather`,
                params:{ ...this.paramsMeteo,lat,lon}
            });

            //con la respuesta extraemos la informacion que se encuentra en la data

            const respuesta= await instance.get();

          
           const {weather, main}=respuesta.data;

            return {

             descripcion: weather[0].description,
              temperatura: main.temp,
              temp_maxima: main.temp_max,
              temp_minima: main.temp_min
             }
        

        }catch(error){

            console.log("No se ha encontrado la ciudad");
        }
    }


    agregarHistorial(lugar=""){


        //Prevenir duplicados

        if (this.historial.includes(lugar.toLocaleLowerCase)){

            return;
        }else{

            this.historial.unshift(lugar);
            //Grabar en un archivo de texto
    

        }

        //Grabar en DB

        this.guardarDB();

       

    }


    guardarDB(){

        const mas={

            historial:this.historial
        }

        fs.writeFileSync(this.databasePath, JSON.stringify(mas));

    }

    leerDB(){


    }





}



module.exports=Busquedas;


