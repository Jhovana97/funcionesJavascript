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