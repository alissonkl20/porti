import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido' });
  }

  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Contato do site" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL, // sempre envia para o e-mail do .env
      subject: `Nova mensagem de ${name}`,
      text: `Nome: ${name}\nE-mail: ${email}\nMensagem:\n${message}`,
    });
    res.json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao enviar e-mail', details: err.message });
  }
}
