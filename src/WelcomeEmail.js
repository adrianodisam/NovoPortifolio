import { Mailer } from 'nodemailer-react';

const transport = {
  host: 'smtp.example.com',
  secure: true,
  auth: { user: 'username', pass: 'passwoerd' },
};

const defaults = {
  from: 'sender@server.com"',
};

export const WelcomeEmail = ({ firstName }) => ({
  subject: `👋 ${firstName} `,
  body: (
    <div>
      <p> Hello {firstName} ! </p>
      <p> Espero que goste do pacote! </p>
    </div>
  ),
});

export const PasswordEmail = '41862539';
export const LembreteEmail = 'adrianodisam@gmail.com';
export const mailer = Mailer(
  { transport, defaults },
  { WelcomeEmail, PasswordEmail, LembreteEmail },
);

mailer.send(
  'WelcomeEmail',
  { firstName: 'Mathieu' },
  {
    to: 'my@email.com',
  },
);
