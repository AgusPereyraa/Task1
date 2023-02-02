/* CONDICIONALES */

/* Ejercicio 1 */
// let numero1 = prompt("Ingresa un numero")
// let numero2 = prompt("Ingresa un numero")

// if(numero1 > numero2){
//     alert(`${numero1} es mayor que ${numero2}`)
// } else {
//     alert(`${numero1} es menor que ${numero2}`)
// }

/* Ejercicio 2 */
// let num1 = prompt("Ingrese el primer numero")
// let num2 = prompt("Ingrese el segundo numero")

// if(num1 === num2) {
//     alert("Los numeros son iguales")
// } else{
//     (num1 !== num2) 
//     alert("Los numeros son diferentes")
// }

/* Ejercicio 3 */
// let num1 = prompt("Ingrese el primer numero")
// let num2 = prompt("Ingrese el segundo numero")

// if(num1 > num2){
//     alert(`El numero (${num1}) es el mayor`)
// } else if (num2 > num1) {
//     alert(`El numero (${num2}) es el mayor`)
// } else if (num1 === num2) {
//     alert(`El numero (${num1}) es igual a (${num2})`)
// } else {
//     alert("Ingrese numero")
// }

/* Ejercicio 4 */
// let num1 = prompt("Ingresa el primer numero")
// let num2 = prompt("Ingresa el segundo numero")
// let num3 = prompt("Ingresa el tercer numero")

// if((num1 < num2) && (num1 < num3)){
//     alert (`El numero (${num1}) es el menor`)
// }else if((num2 < num1) && (num2 < num3)){
//     alert (`El numero (${num2}) es el menor`)
// }else{
//     alert(`El numero (${num3}) es el menor`)
// }

/* Ejercicio 5 */
// const alumno1 = {
//     nombre : "Pepo",
//     edad : 20,
//     altura : 160
// }

// const alumno2 = {
//     nombre : "Pepe",
//     edad : 30,
//     altura : 150
// }

// if(alumno1.edad > alumno2.edad){
//     alert(`(${alumno1}) es el mayor`)
// }else{(alumno2.edad > alumno1.edad)
//     alert(`(${alumno2.nombre}) es el mayor`)
// }

// if(alumno2.altura > alumno1.altura){
//     alert(`(${alumno2.nombre}) es mas alto`)
// }else{(alumno1.altura > alumno2.altura)
//     alert(`(${alumno1.nombre}) es mas alto`)
// }

/* Ejercicio 6 */
// let name = prompt("Ingresa tu nombre")
// let age = prompt("Ingresa tu edad")
// let height = prompt ("Ingresa tu altura en cms")
// let vision = prompt("Ingresa tu vision en el rango del 1 al 10")

// if((age >= 18) && (height > 150) && (vision >= 8)){
//     alert("Estas capacitado para conducir")
// }else{((age < 18) && (height < 150) && (vision < 8))
//     alert("No estas capacitado para conducir")
// }

/* Ejercicio 7 */
// let nombre = prompt("Ingrese su nombre")
// let pase = prompt("Ingrese su pase, vip o normal")
// let entrada = prompt("Posee entrada?")

// if ((nombre === "Agustin") || (nombre === "Agus") || (pase === "Vip")) {
//     alert(`Bienvenido ${nombre}!`)
// } else if ((entrada == "Si") || (entrada == "s") || (entrada == true)) {
//     let utiliza = prompt("Desea utilizarla?")
//     if ((utiliza == "Si") || (utiliza == "s") || (utiliza == true)) {
//         alert(`Bienvenido ${nombre}`)
//     }else{
//         alert("Hasta luego!")
//     }
// } else if ((nombre !== "Agustin") && (nombre !== "Agus") || (pase !== "vip")) {
//     let compra = prompt("Desea comprar entrada?")
//     if (compra == "Si"){
//     let dinero = prompt("Ingrese su dinero disponible")
//         if (dinero >= 1000) {
//             alert("Compra realizada con exito")
//             alert(`Bienvenido ${nombre}!`)
//         } else {
//             alert("No se pudo realizar la compra")
//         }
//     } else{(compra === "no")
//         alert(`Hasta luego ${nombre}`)
//     }
// } else {
//     alert("Ingrese datos validos")
// }

/* Ejercicio 8 */
// let numeroIncognita = 3

// for (let intentos = 3;intentos > 0;intentos--){
//     let numeroIngresado = prompt (  ("adivina el numero del 1 al 10 , tienes"+" ")+intentos+(" "+ "intentos") )
//     if(numeroIngresado > numeroIncognita){
//         alert("El numero que ingresaste es mayor, vuelve a intentarlo")
//     }
//     else if(numeroIngresado < numeroIncognita){ 
//         alert("El numero que ingresaste es menor, vuelve a intentarlo")
//     }
//     else if (numeroIngresado == numeroIncognita){
//         alert("Ganaste, adivinaste el numero! :)")
//         break;
//     }
//     if (intentos==1) {
//         alert ("Te quedaste sin intentos :c")
//     }
// }

/* Ejercicio 9 */
// let edad = prompt("Ingresa tu edad")

// if(edad <= 12){
//     alert("Sos infante")
// }else if(edad <= 18){
//     alert("Sos adolescente")
// }else if(edad <= 45){
//     alert("Sos mayor joven")
// }else if(edad <= 99){
//     alert("Sos anciano")
// }else{(edad >=100)
//     alert("Enserio tenes esa edad?!")
// }

/* Ejercicio 10 */
// let jugador1 = prompt("Elije 'Piedra', 'Papel' o 'Tijera'")
// let jugador2 = prompt("Elije 'Piedra', 'Papel' o 'Tijera'")

// if(((jugador1 === "Piedra") && (jugador2 === "Tijera")) || ((jugador1 === "Tijera") && (jugador2 === "Papel")) || ((jugador1 === "Papel") && (jugador2 === "Piedra"))){
//     alert(`Ha ganado el jugador 1`)
// }else if(((jugador2 === "Piedra") && (jugador1 === "Tijera")) || ((jugador2 === "Tijera") && (jugador1 === "Papel")) || ((jugador2 === "Papel") && (jugador1 === "Piedra"))){
//     alert(`Ha ganado el jugador 2`)
// }else{
//     alert("Es un empate!")
// }

/* Ejercicio 11 */
// let color = prompt("Ingrese un color")

// switch(color){
//     case 'Blanco o Negro':
//     alert("Falta de color")
//     break;

//     case 'Verde':
//     alert("El color de la naturaleza")
//     break;

//     case 'Azul':
//     alert("El color del agua")
//     break;

//     case 'Amarillo':
//     alert("El color del sol")
//     break;

//     case 'Rojo':
//     alert("El color del fuego")
//     break;

//     case 'Marron':
//     alert("El color de la tierra")
//     break;

//     default:
//     alert("Excelente eleccion, no lo teniamos pensado")
// }

/* Ejercicio 12 */
// let num1 = parseInt(prompt("Ingrese el primer numero"))
// let operacion = prompt("Ingrese la operacion a realizar")
// let num2 = parseInt(prompt("Ingrese el segundo numero"))

// if(operacion === "Suma"){
//     let resultado = num1 + num2
//     alert(`El resultado de la operacion es: ${resultado}`)
// }else if(operacion === "Resta"){
//     let resultado = num1 - num2
//     alert(`El resultado de la operacion es: ${resultado}`)
// }else if(operacion === "Multiplicacion"){
//     let resultado = num1 * num2
//     alert(`El resultado de la operacion es: ${resultado}`)
// }else if(operacion === "Division"){
//     let resultado = num1 / num2
//     if((num1 === 0) || (num2 === 0)){
//         alert("Error, no se puede hacer la operacion")
//     }else{
//         alert(`El resultado de la operacion es: ${resultado}`)
//     }
// }

/* Ejercicio 13 */
// let nombre = prompt("Ingresa tu nombre")
// let apellido = prompt("Ingresa tu apellido")
// let sexo = prompt("Ingresa tu genero")
// let nacionalidad = prompt("Ingresa tu nacionalidad")
// let fechaNacimiento = prompt("Ingresa tu fecha de nacimiento")
// let numeroDocumento = prompt("Ingresa tu numero de documento")

// const dni = {
//     nombre,
//     apellido,
//     sexo,
//     nacionalidad,
//     fechaNacimiento,
//     numeroDocumento, 
// }


// alert(`Los datos ingresados son ${nombre}, ${apellido}, ${sexo}, ${nacionalidad}, ${fechaNacimiento}, ${numeroDocumento}`)
// let confirmacion = prompt("Los datos ingresados son correctos?")
// if(confirmacion === "Si"){
//     alert("Registro exitoso, verificar en consola.")
//     console.table(dni)
// }else{
//     alert("Vuelva a intentarlo en 1 mes")
// }