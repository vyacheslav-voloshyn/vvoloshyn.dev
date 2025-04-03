import sgMail from '@sendgrid/mail';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

    const adminEmail = {
      to: process.env.ADMIN_EMAIL,
      from: process.env.VERIFIED_SENDER_EMAIL!,
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
      from: process.env.VERIFIED_SENDER_EMAIL!,
      subject: 'Thank you for contacting us',
      text: `
        Dear ${name},
        
        Thank you for reaching out! We have received your message and will get back to you soon.
        
        Best regards,
        Your Name
      `,
      html: `
        <h3>Thank you for contacting us!</h3>
        <p>Dear ${name},</p>
        <p>Thank you for reaching out! We have received your message and will get back to you soon.</p>
        <p>Best regards,<br>Your Name</p>
      `,
    };

    await sgMail.send([adminEmail, confirmationEmail]);

    return NextResponse.json({ message: 'Emails sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
