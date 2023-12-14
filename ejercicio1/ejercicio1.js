/*Escribir un programa de extraiga las parte 
numérica de una placa de un auto.*/
'use strict'

let placa='JLD-1909';
let number = placa.indexOf('-');
alert(placa.slice(number+1));

