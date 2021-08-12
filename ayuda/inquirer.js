const inquirer = require("inquirer")
require("colors");


// Nos hemos descargado el paquete inquirer mediante el cual podemos construir menus interactivos
// en nuestra consola. Para ello lo instalamos mediante el nmp i inquirer
const inquirerMenu= async()=>{



    console.clear();
        console.log("##########################################################".green.bold);
        console.log("      Información meteorológica y climatológica       ".red.italic);
        console.log("##########################################################\n".green.bold);
    
        const {opcion}= await inquirer.prompt(menuOpciones);

        return opcion;
    
}

const menuOpciones=[
    {
        type: "list",
        name:"opcion",
        message:"¿Que desea hacer?",
        choices: [
            {
                value:1,
                name:"1.".red.bold +" Introduzca la ciudad"
            

            },
            {
                value:2,
                name:"2.".red.bold +" Historial"

            },
            {
                value:3,
                name:"3.".red.bold +" Salir de la aplicación"
            }
            
            
            
            ]





}

    

]



const repetirMenu = async()=>{



    const frasePausa=[
        {
            type:"input",
            name:"pausa",
            message: `\nPresione ${"ENTER".green} para continuar\n`
        }
    ]
    console.log("\n");
    
   const {pausa}= await inquirer.prompt(frasePausa);
    return pausa;
}


const leerInput =async(mensaje)=>{

    const objeto =[
        {
            type:"input",
            name:"descripcion",
            message:mensaje,
            validate(value){

                if (value.length===0){
                    return "Por favor ingrese una ciudad a consultar"
                }
                return true;
            }
        }

    ];

    const {descripcion}= await inquirer.prompt(objeto);

    return descripcion;
}


const listarCiudades = async(ciudades =[])=>{


    const choices=ciudades.map((ciudad,i)=>{

        const idx=`${i+1}`.green;
        return {

            value:ciudad.id,
            name: `${idx} ${ciudad.nombre}`
        }

    });

    choices.unshift({

        value:"0",
        name:'0.'.green + "Cancelar"
    })

    const preguntas=[
        {type:'list',
        name:'id',
        message:'Seleccione lugar: ',
        choices
    
    
        }

    ]

    const {id}= await inquirer.prompt(preguntas);
    return id;

    


}


const confirmar =async (mensaje)=>{

    const pregunta=[

        {

            type:'confirm',
            name:'ok',
            message:mensaje
        }
    ];

    const {ok}= await inquirer.prompt(pregunta);

    return ok;


}

const mostrarListadoCheckList = async(tareas =[])=>{


    const choices=tareas.map((tarea,i)=>{

        const idx=`${i+1}.`.green;
        return {

            value:tarea.id,
            name: `${idx} ${tarea.descripcion}`,
            checked:(tarea.completadoEn)?true:false
        }

    });

   
    const pregunta=[
        {type:'checkbox',
        name:'ids',
        message:'Seleccione',
        choices
    
    
        }

    ]

    const {ids}= await inquirer.prompt(pregunta);
    return ids;

    


}

module.exports=  {

    inquirerMenu,
    repetirMenu,
    leerInput,
    listarCiudades,
    confirmar,
    mostrarListadoCheckList
}