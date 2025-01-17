function saludo (){
    let nombre = prompt("dime tu nombre");

    alert("hola " + nombre)


}
function suma(){
    // estoy pidiendo enteros(numeros)
    let num = parseInt(prompt("dame un numero"));
    let num2 = parseInt(prompt("dame otro numero"));
   let resultado = num + num2;

    alert(resultado)
}
function multiplicar(){
    let num = parseInt(prompt("un numero"));
    let num2 = parseInt(prompt("otro numero"));
    let resultado = num * num2;

    alert(resultado)
}

// completar division y resta , raiz cuadrada . si un numero es par o impar

function dividir(){
    let num = parseInt(prompt("ingrese un numero"));
    let num2 = parseInt(prompt("ingrese otro numero"));
    let resultado = num / num2;
    alert(resultado)
}
function resta(){
    let num = parseInt(prompt("ingrese el numero"));
    let num2 = parseInt(prompt("ingrese un segundo numero"));
    let resultado = num - num2;

    alert(resultado)
}

function raiz(){
    let num = parseInt(prompt("ingrese numero del cual quiere su raicita cuadradita ;)"));
    let resultado = Math.sqrt(num)

    alert(resultado)
}
function numeros(){
    let num = parseInt(prompt("ingrese un numero"));
        if(num %2 == 0){
            document.write("es par")
        } else{
            alert("es impar")
        }
}
// incrementaer potencia
 function potencia(){
    let num = parseInt(prompt("ingrese numero "));
    let potencia = parseInt(prompt("ingrese la cantidad a elevar"))
    let resultado = num**potencia;

    alert(resultado);
 }



// let numero = 10;
// numero += 5;
// document.write(numero)


// condicionales
function edad(){
    let edad = parseInt(prompt("ingrese su edad"));
    if (edad > 0){
        if (edad <= 18){
            document.write("menor de edad")
        }
        else if (edad > 18 && edad <= 40){
            alert("mayor de edad")
        }
        else if (edad > 40 && edad < 100){
            document.write("adulto mayor")
        }
        
    }
    else{
        alert("no valido")
    }
}

function nombres(){
    let nom = parseInt(prompt("quien es tu amigo? \n 1.kedashe \n 2.Willy \n 3.Karla \n 4.jhovana \n 5.eliaana"));
    if (nom == 1){
        alert("escogiste a Kedashe")
    }
    else if (nom == 2){
        alert("escogiste a Willy")
    }
    else if (nom == 3){
        alert("escogiste a Karla")
    }
    else if (nom == 4){
        alert("escogiste a JHovana")
    }
    else if (nom == 5){
        alert("escogiste a Eliana")
    }
    else{
        alert("no es valido")
    }
}

// bucles (for)

function For(){
    let num = parseInt(prompt("ingrese su numero"));
    let cont = 0;
    for(let i = 1; i <= num; i++){
        cont = cont + 1;
        alert(cont);
    }
    
}

function datos(){
    let num = parseInt(prompt("ingrese numero de la cantidad de veces"));
    for(let i = 1; i<=num; i++){
        prompt("ingrese su numero")

    }
}
function serie(){
    let num = parseInt(prompt("ingrese n"));
    let serie = 5;
    for(let i = 1; i<= num; i++){
        alert(serie);
        serie = serie + 5;
    }
        
}
function serieDe9(){
    let n= parseInt(prompt("ingrece numero de veces"));
    let series = 9;
    for(let i = 1; i<= n; i++){
        alert(series);
        series= series + 9;   
    }
}

// la funcion seeries jija
// Función para generar las dos series
function generarSeries(n) {
    let serie1 = [];
    let serie2 = [];
  
    for (let i = 0; i < n; i++) {
      serie1[i] = i + 1; // Serie 1: Incrementa de 1 en 1
      serie2[i] = 0;     // Serie 2: Siempre 0
    }
  
    return { serie1, serie2 };
  }
  
  // Generar las series
  const n = 10; // Número de términos
  const { serie1, serie2 } = generarSeries(n);
  
  // Imprimir las series en la página web
  document.write("Serie 1: " + serie1.join(", ") + "<br>");
  document.write("Serie 2: " + serie2.join(", "));

function vector(){
    let frutas= ["kiwi" , "tomate" , "manzana"];
    alert(frutas)
}

function otraserie(){
    let n = parseInt(prompt("Ingrese el valor de n: "));
let serie = 1; 

for (let i = 1; i <= n; i++) {
    if (serie%2=== 0) {
        document.write("0");
        serie = 1; // 
    } else {
        document.write("1");
        serie= 0; 
    }
}

}
function paresImpares(){
    let n = parseInt(prompt("Ingrese el número de términos: "));
let a = 3; 
let b = 2; 

for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0) { // ! es para  impar en condicional xd
        document.write(a + ",");
        a =a + 3; 
    } else { 
        document.write(b + ",");
        b = b + 2; 
    }
}
}



function notas() {
    let notaEstudiante = parseInt(prompt("Ingrese la calificación del estudiante (0-100):"));

  let calificacion;
  
  if (notaEstudiante >= 90) {
    calificacion = "A";
  } else if (notaEstudiante >= 80) {
    calificacion = "B";
  } else if (notaEstudiante >= 70) {
    calificacion = "C";
  } else if (notaEstudiante >= 60) {
    calificacion = "D";
  } else {
    calificacion = "F";
  }
  
  document.write(calificacion) ;
}


// ejercicio de vectores
const vectorA = [3, 4, 5];
const vectorB = [1, 2, 3];

// 1. Suma de vectores
function sumarVectores(a, b) {
    return a.map((val, i) => val + b[i]);
}

// 2. Producto escalar
function productoEscalar(a, b) {
    return a.reduce((acumulador, val, i) => acumulador + val * b[i], 0);
}

// 3. Módulo (o magnitud) del vector
function moduloVector(a) {
    return Math.sqrt(a.reduce((acumulador, val) => acumulador + val ** 2, 0));
}

// Calculamos los resultados
const suma = sumarVectores(vectorA, vectorB);
const producto = productoEscalar(vectorA, vectorB);
const moduloA = moduloVector(vectorA);
const moduloB = moduloVector(vectorB);

// Mostramos los resultados
console.log("Vector A:", vectorA);
console.log("Vector B:", vectorB);
console.log("Suma de A y B:", suma);
console.log("Producto escalar de A y B:", producto);
console.log("Módulo de A:", moduloA.toFixed(2));
console.log("Módulo de B:", moduloB.toFixed(2));
