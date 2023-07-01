class Estudiante{
    carnet
    nombre
    apellido
    edad
    static nombreClase= "Estudiante"
    constructor(nombre, apellido, edad){
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
        this.carnet = nombre[0] + apellido[0] + edad
    }

    setEdad(edad){
        if(edad >= 3){
            this.edad = edad
        }
    }

    mostrar(){
        console.log(`I'm ${this.nombre} ${this.apellido} y tengo ${this.edad} años, carnet: ${this.carnet}`)
    }

    static funcion(){
        alert("Esto es una funcion estatica " + this.nombreClase)
    }
}