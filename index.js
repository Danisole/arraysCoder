
// const huespedes =[
//     {
//         documento:28290456,
//         nombre: "carla rolo",
//         genero: "femenino",
//         edad: 40
//     },
//     {
//         documento:21004456,
//         nombre: "mario paz",
//         genero: "masculino",
//         edad: 48
//     },
//     {
//         documento:43685594,
//         nombre: "barbara paz",
//         genero: "femenino",
//         edad: 19
//     },
//     {
//         documento:47985585,
//         nombre: "federico paz",
//         genero: "masculino",
//         edad: 15
//     },
// ]

// const dniHuespedes = huespedes.sort((a,b)=>{
//     return a.documento - b.documento
    
// } )
// console.log(dniHuespedes)

// const alfHuespedes = huespedes.sort((a,b) =>{
//     return (a.nombre < b.nombre) ? -1 :1
// })

// console.log(alfHuespedes);



// class Habitaciones{

//     constructor(camas, desayuno, categoria){

//         this.camas = camas;
//         this.desayuno = desayuno;
//         this.categoria = categoria;
//     };
// }

// const habitacionVerde = new Habitaciones(parseInt(prompt("ingrese el numero de camas")), prompt("desayuno true o false"), prompt("ingrese categoria standar o premiun"));

// console.table( `la habitacion verde posee ${habitacionVerde.camas} camas, desayuno ${habitacionVerde.desayuno} y categoria ${habitacionVerde.categoria} `);



const habitaciones =[
    {
        habitacion:"verde",
        camas: 3,
        categoria: "standar",
        desayuno: true
    },
    {
        habitacion:"azul",
        camas: 5,
        categoria: "premiun",
        desayuno: false
    },
    {
        habitacion:"rojo",
        camas: 4,
        categoria: "standar",
        desayuno: true
    },
    {
        habitacion:"rosado",
        camas: 2,
        categoria: "premiun",
        desayuno: true
    },
]
let askCamas = parseInt(prompt("ingrese la cantidad de camas que necesita"))


let buscarCamas = habitaciones.find(cama =>cama.camas == askCamas)

alert(`segun su busqueda de camas disponemos de la habitacion ${buscarCamas.habitacion}`)








