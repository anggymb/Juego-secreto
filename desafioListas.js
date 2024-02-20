/*1.Crea una lista vacía llamada "listaGenerica". */
let listaGenerica = [];
console.log (listaGenerica);

/*2. Crea una lista de lenguajes de programación llamada
 "lenguagesDeProgramacion con los siguientes elementos: 
 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'. */

 let lenguagesDeProgramacion = ["JavaScript", "C", "C++", "Kotlin", "Python"];
 //console.log(lenguagesDeProgramacion);


 /*3. Agrega a la lista "lenguagesDeProgramacion los siguientes elementos:
  'Java', 'Ruby' y 'GoLang'. */

  lenguagesDeProgramacion.push("Java", "Ruby", "Golang");
  //console.log(lenguagesDeProgramacion);

  /*4. Crea una función que muestre en la consola todos los elementos de la lista
   "lenguagesDeProgramacion */

   function mostrarLenguagesDeProgramacion(){
    for (let i=0; i < lenguagesDeProgramacion.length; i++){
        console.log(lenguagesDeProgramacion[i])
    }
   }
   mostrarLenguagesDeProgramacion();

   /*5. Crea una función que muestre en la consola todos los elementos de la lista 
   "lenguagesDeProgramacion en orden inverso. */

   function mostrarLenguagesDeProgramacionInverso() {
    for (let i = lenguagesDeProgramacion.length -1; i>= 0; i--){
        console.log(lenguagesDeProgramacion[i]);
    }
   }
   mostrarLenguagesDeProgramacionInverso();

   /*6. Crea una función que calcule el promedio de los elementos en una lista de números.*/

   function promedioNumeros(lista){
   let suma = 0;
       for (let i = 0; i < lista.length; i++) {
        suma = suma + lista[i];
       }
       return suma / lista.length;
      
   }
   let numeros = [2,4,6,8];
   let media = promedioNumeros(numeros);
   console.log("media:", media);


/*7. Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.*/


function numeroMayorMenor(listaa){
    let numeroMenor = listaa[0];
    let numeroMayor = listaa[0];

    for (let j = 0; j < listaa.length; j++){
        if (numeroMenor > listaa[j]) {
         numeroMenor = listaa[j];
         }

        if (numeroMayor < listaa[j]){
            numeroMayor = listaa[j];
        }
    }
    console.log("el numero mayor de la lista es:" , numeroMayor);
    console.log("El numero menor de la lista es: ", numeroMenor);

    
}

let numerosLista  = [3,4,6,10];
numeroMayorMenor(numerosLista);

/* 8. Crea una función que devuelva la suma de todos los elementos en una lista.*/

function sumaLista(listaSuma){
    let sumar = 0;
    for (i = 0; i < listaSuma.length; i++){
        sumar += listaSuma[i];
    }
    return sumar;
        
}
let numerosSuma = [5,6,2,3];
let sumar = sumaLista(numerosSuma);
console.log ("La suma es: ", sumar);


/*9. Crea una función que reciba una lista como parámetro y retorne el índice de un elemento también pasado como parámetro. 
Si ese elemento no existe en la lista, retorna -1.*/


function encontrarIndiceElemento(lista, elemento) {
    for (let i = 0; i < lista.length; i++) {
      if (lista[i] === elemento) {
        return i; // Retorna el índice del elemento encontrado
      }
    }
    return -1; // Retorna -1 si el elemento no se encuentra en la lista
  }


  /*10. Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.*/

  

/*11.Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.*/

let lista = [1,2,3,4,5];
let cuadrado = [];

function cuadradoLista(lista) {
    for (let i = 0; i < lista.length; i++) {
        cuadrado.push(lista[i] * lista[i]);
    }
    return cuadrado;
}

cuadradoLista(lista);
console.log(cuadrado);