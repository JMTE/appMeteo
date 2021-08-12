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
    const ciudadSeleccionada= ciudades.find(ciu=> ciu.id===idSeleccionar);
   

   


    //Node no conoce el fetch por lo cual hay que instalar un paquete de terceros 

    console.log(ciudad);
    console.log("\n INFORMACIóN DE CIUDAD: ".red.bold);
    console.log("Ciudad :", ciudadSeleccionada.nombre);
    console.log("Latitud: ", ciudadSeleccionada.latitud);
    console.log("Longitud: ", ciudadSeleccionada.longitud);
    console.log("Temperatura: ");
    console.log("Temperatura Mínima: ");
    console.log("Temperatura Máxima: ");

    
    

    break;

    case 2:

    console.log("Aqui el historial");

    break;

    case 3:
    salir=true;
    break;




}

await repetirMenu();

}while (!salir);








}

main();