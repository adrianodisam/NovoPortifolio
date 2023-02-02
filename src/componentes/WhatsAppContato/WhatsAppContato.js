import React from 'react';
import Styles from './WhatsAppContato.module.css';
import imagem from '../WhatsAppContato/whatsapp.png';
// import { Mailer } from 'nodemailer-react';
// import { stream } from 'node:streamt';

// const enviar = () => {
//   const transport = {
//     host: 'smtp.example.com',
//     secure: true,
//     auth: { user: 'username', pass: 'passwoerd' },
//   };

//   const defaults = {
//     from: 'sender@server.com"',
//   };

//   const WelcomeEmail = ({ firstName }) => ({
//     subject: `👋 ${firstName} `,
//     body: (
//       <div>
//         <p> Hello {firstName} ! </p>
//         <p> Espero que goste do pacote! </p>
//       </div>
//     ),
//   });

//   const PasswordEmail = '41862539';
//   const LembreteEmail = 'adrianodisam@gmail.com';
//   const mailer = Mailer(
//     { transport, defaults },
//     { WelcomeEmail, PasswordEmail, LembreteEmail },
//   );

//   mailer.send(
//     'WelcomeEmail',
//     { firstName: 'Mathieu' },
//     {
//       to: 'my@email.com',
//     },
//   );
// };

const WhatsAppContato = (props) => {
  return (
    <div className={Styles.container}>
      <span className={Styles.containerSpan}>
        <a href={props.link} target="blank">
          <img src={imagem} alt="Logo whatsapp" />
          <span>{props.texto}</span>
        </a>
      </span>
    </div>
  );
};

export default WhatsAppContato;
