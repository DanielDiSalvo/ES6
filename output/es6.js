"use strict";

// Caracteristicas Variables #1
// Con var es posible re-declarar variables
// var nombre = 'Daniel';
// var nombre = 'Jose'
// let pais = 'Argentina';
// let pais = 'Alemania;' con ES6 no podemos hacer esta reasignacion
// console.log('Hola ' + nombre + ' y mi pais es ' + pais);
//Caracteristica #2
// let y const tambien tienen un scope en el que no podemos acceder 
// a las variables creadas dentro de una misma funcion
// function saludo() {
//     var nombre = 'Daniel';
//     return 'Hola ' + nombre;
// }
// console.log(saludo());
//console.log(nombre) Si intento acceder a la variable nombre no podemos acceder 
// Caracteristica #3
// let y const tienen un scope de tipo bloque
// todas las variables dentro de un bloque (entre llaves) estan protegidas
// let edad = 18;
// if (edad >= 18) {
//     let esAdulto = true;
//     console.log(esAdulto);
// }
//console.log(esAdulto); no puedo acceder desde afuera del bloque a la varibla let esAdulto 
//Template Strings o Template Literals
var nombre = 'Daniel Di Salvo';
var edad = 33;
var pais = 'Argentina';
console.log("Hola! mi nombre es ".concat(nombre, ", tengo ").concat(edad, " a\xF1os y soy de ").concat(pais));