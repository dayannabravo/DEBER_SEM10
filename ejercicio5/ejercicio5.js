/*Escribir un programa para obtener el nombre 
de usuario de un correo electrónico.
#Ejemplo
Entrada: nombredeuser@magbdigital.net
salida: nombredeuser*/


let correoelectronico = 'nombredeuser@magbdigital.net';
let arroba = correoelectronico.indexOf('@');
let nombreusuario = correoelectronico.slice(0, arroba);


alert('El nombre de usuario es: ' + nombreusuario);
