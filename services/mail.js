const nodemailer = require('nodemailer');
const SMTPConnection = require('nodemailer/lib/smtp-connection');
// el envio de mail tiene asociada una demora, entonces es async await


//esto se saca de la coumentacion de la pag de nodemailer
const send = async ({mail, asunto, cuerpo}) => {
    try{
    const transporter = nodemailer.createTransport({
        // host: 'smtp.gmail.com',
        // port: 587,
        // secure: false, 
        // Esto es lo mismo que la siguiente linea:
        service: process.env.MAIL_SERVICE || 'Gmail',
        auth: {
            user:  process.env.MAIL_USER || 'mail',
            pass:  process.env.MAIL_PASSWORD || 'password',
        }
    });
    const info = {
        // to: 'alonsotaverna@hotmail.com',
        // subject: 'Gracias por registrarte',
        // html: '<h2> Gracias por registrarte!! <h2>',
        //text: 'Biennvenido'

        // Para no escribir el html en este codigo, lo reemplazamos por variables en el async y luego las llamamos abajo:
        from: '<no-reply>alonsontaverna@gmail.com<no-reply>',
        to: mail,
        subject: asunto,
        html: cuerpo,

    };
    //destructuring!! 
    const {messageId} = await transporter.sendMail(info);
    return messageId;
    }
    catch(e){
        console.log(e);
    }
}

module.exports = {send}; //siempre se exporta para poder usar la funciona en otra parte de la aplicacion web.