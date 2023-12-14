/*Escribir un programa que obtenga el nombre 
de usuario de facebook desde la url.
#Ejemplo
Entrada: facebook.com/nombreuser
Salida: nombreuser */


let urlInstagram = 'Instagram.com/daya';
let slash = urlInstagram.lastIndexOf('/');
let nombreusuario = urlInstagram.slice(slash + 1);

alert('El nombre de usuario es: ' + nombreusuario);
