/*Desarrollar un programa que genere la asignación de letras 
para las filas de computadoras en un laboratorio. Se debe tener 
en cuenta que la codificación sigue el formato LAB2#A, donde indica 
la fila A del laboratorio 2
Entrada: LAB2#B
Salida: C */

let entrada = "LAB2#B";
let salida = generasig(entrada);

alert("Entrada: " + entrada);
alert("Salida: " + salida.slice(5));

function generasig(fila) {
   
    let numbfila = fila.slice(fila.indexOf("#") + 1);
    let letractual = fila[fila.length - 1];
    let codLetra = letractual.codePointAt();
    let stgcodigo = codLetra + 1;
    let stgletra = String.fromCodePoint(stgcodigo);
  
  
    let newasig = fila.slice(0, fila.length - 1) + stgletra;
  
    return newasig;
  }
  

