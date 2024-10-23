//PUNTO 1

// let frutas = ["mango","fresa","pera","papaya","pepino","kiwi"]
// document.write("posiciones pares: ",frutas[1],"<br>",frutas[3],"<br>",frutas[5],"<br>")
// document.write("posiciones impares: ",frutas[0],"<br>",frutas[2],"<br>",frutas[4])

//PUNTO 2

// let numeros = [Number(prompt("numero1")),Number(prompt("numero2")),Number(prompt("numero3")),Number(prompt("numero4")),Number(prompt("numero5"))]

// let numeroMayor = Math.max(...numeros)
// let numeroMenor = Math.min(...numeros)
// let promedio =  (numeros.reduce((a, b) => a + b, 0)) / numeros.length
// document.write("Numeros: "+numeros+"<br>"+"Numero mayor: "+numeroMayor+"<br>"+"Numero menor: "+numeroMenor+"<br>"+"Promedio: "+promedio)

//PUNTO 3

// let arreglo = ["zanahoria","banano","manzana","pera","cebolla","papa","fresas","ajo","sandia"]
// document.write("Las frutas son: "+arreglo[1]+"<br>"+arreglo[2]+"<br>"+arreglo[3]+"<br>"+arreglo[6]+"<br>"+arreglo[8]+"<br>")


//PUNTO 4

// let empleados = [
//     {nombre: "Pedro",salario:5000000,profesion:"Abogado"},
//     {nombre: "Angie",salario:3900000,profesion:"Odontologa"},
//     {nombre: "Luis",salario:2500000,profesion:"Asesor Bancario"},
//     {nombre: "Lina",salario:4500000,profesion:"Psicoloca"}
// ]
// let sumaSalarios = (empleados.reduce((a,b)=> a+b.salario,0))


// empleados.forEach(empleado => {
//     if(empleado.nombre === "Lina" ){
//         empleado.profesion = "psicologa"
//     }
// })
// empleados.forEach(empleado => {
//     if(empleado != null){
//         empleado.area_de_trabajo = ""
//     }
// }) 
// document.write(`La suma de los salarios es: ${sumaSalarios} <br>`)
// console.log(empleados)

//PUNTO 5

// function burbujaEmpleados(empleados) {
//     let n = empleados.length;
//     let intercambiado;

//     do {
//         intercambiado = false;
//         for (let i = 0; i < n - 1; i++) {
//             if (empleados[i].salario < empleados[i + 1].salario) {
//                 let temp = empleados[i];
//                 empleados[i] = empleados[i + 1];
//                 empleados[i + 1] = temp;
//                 intercambiado = true; 
//             }
//         }
//         n--; 
//     } while (intercambiado);
// }

// burbujaEmpleados(empleados)
//PUNTO 5 CORTO
// empleados.sort((a,b) => b.salario - a.salario)


//EJERCICIOS COMPUESTOS ......
//PUNTO 1


// function PedirDatos() {
//     cantidadPro = Number(prompt("digite la cantidad de productos a comprar"))
//     productos = []
//     total = 0
//     if (cantidadPro  > 0) {
//     for (let i = 0; i < cantidadPro; i++) {
            
//             producto = prompt("digite un producto")
//             precio = Number(prompt("digite el precio"))
//             cantidad = Number(prompt("digite cantidad a comprar"))
//             subtotal = precio * cantidad
//             productos.push({producto,precio,cantidad,subtotal})
            
//             total += precio * cantidad
//      }
     
//     }
//     return {productos, total}
// }
// let resultado  = PedirDatos()

// console.log("productos ingresados: ",resultado.productos)
// console.log("Total a pagar",resultado.total)