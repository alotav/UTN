const fs = require('fs');  //maneja sistema de archivos
const {v4:uuid} = require('uuid');

const extPermitidas = ["jpg", "jpeg", "png"];  //declaramos una const con las extensiones de loa archivos que queremos permitir. Pueden ser imagenes o cualquier otro archivo.
// const extpdfPermitida = ["pdf"];

//la funcion saveFile sirve como predeterminada para cualquier tipo de archivo:
//en vez de file pasamos con destructuring {mimetype, extension}
const saveFile = ({path, mimetype, extension}, allowE, destFolder = `./public/images`) => {
    try{
    const [type, extension] = mimetype.split("/"); // lo mismo que arriba, en vez de file.mimetype solo el mime. type y extension son dos constantes con los valores del array que nos devuelve el split.
    console.log(mimetype);
    if(!allowE.includes(extension)) throw "Formato incorrecto"; // el signo ! significa negacion. En este caso es:si "extension" NO ESTA dentro de las allowE entonces mostrar Formato incorrecto.
    const uid =  uuid(); //le damos un uid a la imagen
    const fileName = `${uid}.${extension}`; // hacemos que el nombre del archivo sea el uid.extension
    const fileNameOut = `${destFolder}/${fileName}`; //carpeta donde va a ir nuestra imagen
    fs.createReadStream(path).pipe(fs.createWriteStream(fileNameOut)); //leemos el path con readstream y luego lo escribimos el archivo final con write stream en direccion indicada en la constante fileNameOut.
    fs.unlink(path, (err) => console.log(err)); //con esta linea borramos el archivo temporal
    return fileName;
    } catch(e){
       // fs.unlink(path, (err) => console.log(err)); //con esta linea borramos el archivo temporal
        console.log(e); // nos muestra el throw
    }
}

const imgFile = (file) => saveFile(file, extPermitidas);  // extPermitidas va a reemplazar a allowE
// const pdfFile = (file) => saveFile(file, extpdfPermitida, './public/pdf'); //para manejar pdf deberiamos hacer algo parecido a esta linea. Y exportarlo como se exporto el imgFile. En este caso extpdfPermitida reemplaza a allowE


module.exports = {imgFile};