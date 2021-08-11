const { leerInput } = require("./ayuda/inquirer")

require("colors");


const main= async()=>{


const texto=await leerInput("hola");

console.log(texto);

}

main();