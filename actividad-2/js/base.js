console.log("hola mundo")

const edad = 28;

let nombre = "sebastian"
const esEstudiante = false
const altura = 1.70
const semestres=[]//list array
const materiapreferida = {nombre:"calculo",id:0}
const universidad=null
const carrera= undefined

console.log(`${nombre}`)

const imprimir = (nombre,apellido)=>{

    
console.log(`${nombre} ${apellido}`)
}


const crearnombrecompleto = (nombre,apellido)=>{
    console.log("global scope")    
    console.log(`${nombre} ${apellido}`)
    var name = nombre
    if (name.legth >3){
        var name = nombre[0] + " " + apellido
        console.log("94" + name)
    }
    console.log("92" + name)
    }
    