const cafeteria={
    nombre:'Los pinos',
    apellido: '',
    actividades(juego){
        console.log(`Soy ${this.nombre} ${this.apellido} y estamos jugado al ${juego}`)
    }
}

//console.log(cafeteria)

let persona = {
    nombre:'Emilio',
    apellido: 'Herrera'

}

persona ={
    nombre: "Denny",
    apellido: "Herrera"
}

//console.log(persona)
//call(acceder al contexto de otro objeto)

//let accederCall=cafeteria.actividades.call(persona,'billar')

//apply(acceder al contexto de otro objeto)

//let accederApply=cafeteria.actividades.apply(persona,['poker'])


//bind(retorna una nueva función con el nuevo contexto)

const jugar=cafeteria.actividades.bind(persona)

console.log(jugar)

jugar('futbolin')
jugar('cartas')
