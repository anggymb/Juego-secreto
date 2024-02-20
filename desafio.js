//DESAFIO:

/* 1. Crea una función que calcule el índice de masa corporal (IMC)
 de una persona a partir de su altura en metros y peso en kilogramos, 
 que se recibirán como parámetros.*/
/*
 function indiceMasaCorporal(altura, peso){
    let imc = peso / (altura*altura);
    return imc;   
    //console.log(imc);
 }
 indiceMasaCorporal(150,50);
*/

 /* 2. Crea una función que calcule el valor del factorial de un número pasado como parámetro.*/
 //    n! = n * (n-1) 
 /*
 function calcularFactorial(numero){ 
    let resultado = 1;
    for (i = 1; i <= numero; i++){
        resultado = resultado * i;  //1*2*3*4*5*6*7
    }
    //return resultado;
    console.log(resultado);
  }
  calcularFactorial(7); */

 //Otra forma:
 /*
   function calcularFactorial(numero) {
    if (numero === 0 || numero === 1) {
      return 1;
    } else {
      return numero * calcularFactorial(numero - 1);
    }
  }
  // Ejemplo de uso
  let numero = 5;
  let resultado = calcularFactorial(numero);
  console.log(`El factorial de ${numero} es ${resultado}`);
*/


  /* 3.Crea una función que convierta un valor en dólares, pasado como parámetro,
   y devuelva el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo 
   con el valor del dólar en tu país). Para esto,
   considera la cotización del dólar igual a R$4,80*/

   /*
   function convertirDolaresAPeso(peso) {
    let valorDolar = 0.00025;
    return peso * valorDolar;
   }
   
   let peso = 5000;
   let conversion = convertirDolaresAPeso(peso);
   console.log(`El valor en pesos de ${peso} es ${conversion} dólares`);

   */

   /* 4. Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular,
    utilizando la altura y la anchura que se proporcionarán como parámetros. */

    /*
   function areaRectangulo(base, altura){
    let area = base * altura;
    //return area;
    console.log (area);
   }

   function perimetroRectangulo(a,b){
    let perimetro = (2*a + 2*b);
    console.log (perimetro);
   }
   areaRectangulo(18,12);
   perimetroRectangulo(18,12);
   */

   /* Otra forma:*/
   /*
  function calcularAreaYPerimetroRectangular(altura, anchura) {
    var area = altura * anchura;
    var perimetro = 2 * (altura + anchura);
    console.log("Área: " + area);
    console.log("Perímetro: " + perimetro);
}
// Ejemplo de uso
let altura = 3; // en metros
let anchura = 5; // en metros
calcularAreaYPerimetroRectangular(altura, anchura);
*/

/* 5. Crea una función que muestre en pantalla el área y el perímetro de una sala circular, 
utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.*/
/*
function calcularAreaPerimetroCircular(radio){
    let pi = 3.14; 
    let area = pi*radio*radio;
    let perimetro = 2*pi*radio
    console.log("Area: " + area);
    console.log("Perímetro: " + perimetro);
}

let radio = 5;
calcularAreaPerimetroCircular(radio);
*/

/*6. Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.*/
/*
function tablaMultiplicar(numero){
    for (i = 1; i<=10; i++){
        let resultado = i* numero;
        console.log(i , '* ' + numero , "= " + resultado);
    }
}
tablaMultiplicar(5);
*/
