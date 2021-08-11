const { leerInput, inquirerMenu, repetirMenu } = require("./ayuda/inquirer");
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

    console.log(ciudad);
    console.log("\n INFORMACIóN DE CIUDAD: ".red.bold);
    console.log("Latitud: ");
    console.log("Longitud: ");
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