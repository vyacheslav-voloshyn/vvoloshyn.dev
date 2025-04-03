import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    const adminEmail = {
      to: process.env.ADMIN_EMAIL,
      from: process.env.GMAIL_USER,
      subject: `New Contact Form Submission from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    const confirmationEmail = {
      to: email,
      from: process.env.GMAIL_USER,
      subject: 'Thank you for contacting us',
      text: `
        Dear ${name},
        
        Thank you for reaching out! We have received your message and will get back to you soon.
        
        Best regards,
        Vyacheslav Voloshyn
      `,
      html: `
        <h3>Thank you for contacting us!</h3>
        <p>Dear ${name},</p>
        <p>Thank you for reaching out! We have received your message and will get back to you soon.</p>
        <p>Best regards,<br>Vyacheslav Voloshyn</p>
      `,
    };

    await transporter.sendMail(adminEmail);
    await transporter.sendMail(confirmationEmail);

    return NextResponse.json({ message: 'Emails sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
