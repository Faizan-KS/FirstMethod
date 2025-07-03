import { Resend } from 'resend';

const resend = new Resend(process.env.Email_Service_Key);

export async function POST(req) {
  const body = await req.json();
  const { fullName, company, email, phone, services, message } = body;

  try {
    const data = await resend.emails.send({
      from: 'FirstMethod <onboarding@resend.dev>',
      to: 'firstmethod.in@gmail.com',
      subject: 'New Contact Form Submission',
      html: `
        <p><strong>Full Name:</strong> ${fullName}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Services:</strong> ${services?.join(', ')}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    return new Response(JSON.stringify({ success: true, data }), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
    });
  }
}
