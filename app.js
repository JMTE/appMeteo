const { leerInput, inquirerMenu, repetirMenu } = require("./ayuda/inquirer")

require("colors");


const main= async()=>{


let opcion;
let salir=false;



do{
   opcion= await inquirerMenu();
    
    
    switch (opcion) {

    case 1:

    console.log("Aqui la ciudad");

    const ciudad=await leerInput("Dame la ciudad a consultar: \n");

    console.log(ciudad);
    
    

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