//setTimeout 

 const pantalla=document.querySelector('body')

/*
 let retardo=setTimeout(()=>{

     pantalla.style.backgroundColor='green'
     clearTimeout(retardo)
     console.log('se ha limpiado el retardo')

 },1000)
*/

//setInteval *****************************************************************************

 let contador=0; 
 let cuenta = document.querySelectorAll('.cuenta')

 console.log(cuenta[cuenta.length-1])

 console.log(cuenta)

/*
 for(let item in cuenta){
    console.log(cuenta[item])
}*/

for(let item of cuenta){
    console.log(item)
}

/*
for(let i = 0; i < cuenta.length; i++){
    console.log(cuenta[i])
}
*/
 let newContador=setInterval(()=>{
    //console.log(cuenta)
    if(contador>10)
       clearInterval(newContador) 
    else{
        for(let item of cuenta){
            item.innerHTML = contador
        }
        contador++
        /*cuenta[0].innerHTML = contador
        cuenta[1].innerHTML = contador++*/
    }
      //console.log(contador++)

 },1000)

//window.requestAnimationFrame()*****************************************************************

// function holaMundo(){
//   let saludo=window.requestAnimationFrame(holaMundo)
    
//   console.log('hola mundo')

//   saludo>1000 ? window.cancelAnimationFrame(saludo):null

// }
// holaMundo()

