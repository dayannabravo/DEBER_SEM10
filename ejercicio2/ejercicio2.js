/*Escribir un programa que permita obtener el numero
 de piso de un edificio de oficinas donde el formato 
 de numeración de las oficinas  es: “01.24” lo que significa 
 piso 1 oficina 24. */

'use strict'
let office = '01.24'

let piso = office.substring(0,2);
alert('La office esta en el piso '+piso);