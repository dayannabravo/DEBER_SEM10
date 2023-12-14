/* Escribir un programa que obtenga el ID de un recurso compartido de Gdrive.
Entrada: https://drive.google.com/file/d/1FP3paEh4-Z6ExNQ_Lp4N9WO7XQ_3DPG1/view?usp=drive_link
Salida: 1FP3paEh4-Z6ExNQ_Lp4N9WO7XQ_3DPG1*/

let urlGDrive = 'https://drive.google.com/file/d/1FP3paEh4-Z6ExNQ_Lp4N9WO7XQ_3DPG1/view?usp=drive_link';
let slash = urlGDrive.indexOf('/d/') + 3;

let despues = urlGDrive.indexOf('/', slash);

let IDrecur = urlGDrive.slice(slash, despues);


alert('El ID del recurso compartido es: ' + IDrecur);

