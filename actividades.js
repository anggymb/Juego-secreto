//ACTIVIDADES FUNCIONES:

/* 1. Crear una función que muestre "¡Hola, mundo!" en la consola.*/

function saludo() {
    console.log ("¡Hola mundo!");
}
saludo();

/* 2. Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.*/

function saludo2(nombre) {
    console.log(`!Hola, ${nombre}!`);
}
saludo2('Angela');

/* 3. Crear una función que reciba un número como parámetro y devuelva el doble de ese número.*/

function numeroDoble(numero){
   return numero *2 ;
}
let resultadoDoble = numeroDoble(6);
console.log(resultadoDoble);

/* 4. Crear una función que reciba tres números como parámetros y devuelva su promedio.*/

function promedioTresNumeros(numero1, numero2, numero3){

    return ((numero1 + numero2 + numero3)/3);
}
let resultadoPromedio = promedioTresNumeros(8, 10, 14);
console.log(resultadoPromedio);

/* 5. Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.*/

function numeroMayor(num1, num2){
    if (num1 > num2) {
        console.log ('el número, '  + num1,  'es mayor');
    }   else {
            console.log('el número, '  + num2,  'es menor');
        }
}
numeroMayor(4, 3);

/* Otra solución al punto 5.*/

function encontrarMayor(a, b){
    return a > b ? a : b;
}
let numMayor = encontrarMayor(15,9);
console.log (numMayor);


/* 6. Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.*/
 function numeroMultiplicado(num){
    return num * num ;
 }
 let resultadoNumeroMultiplicado = numeroMultiplicado(6);
 console.log (resultadoNumeroMultiplicado);

/* Ejercicio*/ 
let nota1 = 7;
let nota2 = 6;
let nota3 = 3;
let nota4 = 5;

function calcularPromedio(nota1, nota2, nota3, nota4){
    let promedio = (nota1 +  nota2 +  nota3 +  nota4)/4
    return promedio;
}
function verificarAprobacion(promedio){
    return promedio >= 5 ? 'Aprobado' : 'Reprobado';
}



