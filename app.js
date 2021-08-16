require('dotenv').config() //configuracion de las variables de entorno


const { leerInput, inquirerMenu, repetirMenu, listarCiudades } = require("./ayuda/inquirer");
const Busquedas = require("./Modelos/busquedas");

require("colors");



const main= async()=>{


let opcion;
let salir=false;
const busquedas=new Busquedas();


do{
   opcion= await inquirerMenu();
    
    
    switch (opcion) {

    case 1:

    //mostrar mensaje
    //buscar los lugares
    //seleccionar el lugar
    //Meteorologia del lugar
    //Mostrar resultados


    const ciudad=await leerInput("CIUDAD:".green);

    const ciudades = await busquedas.ciudad(ciudad);

    const idSeleccionar=await listarCiudades(ciudades);

    if (idSeleccionar==="0"){ //Si cuando escribimos una ciudad queremos volver al menu principal

        continue; //sigue el ciclo sin error


    }
    //El metodo find se utilizar en js para buscar informacion en arrays
    const ciudadSeleccionada= ciudades.find(ciu=> ciu.id===idSeleccionar);

   

    
    //Clima

    const clima=await busquedas.climaLugar(ciudadSeleccionada.lat,ciudadSeleccionada.lon)

    console.log(clima);
   

   


    //Node no conoce el fetch por lo cual hay que instalar un paquete de terceros 

    console.log(ciudad);
    console.log("\n INFORMACIóN DE CIUDAD: ".red.bold);
    console.log("Ciudad :", ciudadSeleccionada.nombre);
    console.log("Latitud: ", ciudadSeleccionada.lat);
    console.log("Longitud: ", ciudadSeleccionada.lon);
    console.log("Temperatura: ", clima.temperatura);
    console.log("Temperatura Mínima: ", clima.temp_minima);
    console.log("Temperatura Máxima: ", clima.temp_maxima);
    console.log("Descripción del climatológica: ", clima.descripcion );

    
     //Guardar en DB

     busquedas.agregarHistorial(ciudadSeleccionada.nombre);

     

     

    break;

    case 2:
    busquedas.historial.forEach((lugar,index)=>{
        const i=`${index+1}. `.green
        console.log(`${i} ${lugar}`);

    })
   

    break;

    case 3:
    salir=true;
    break;




}

await repetirMenu();

}while (!salir);








}

main();