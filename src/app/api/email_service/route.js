import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.Email_Service_Key);

const headers = {
  "Access-Control-Allow-Origin": "*", // For security, replace with your domain in production
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

// Handle POST (actual form submission)
export async function POST(req) {
  try {
    const body = await req.json();
    const { fullName, company, email, phone, services, message } = body;

    const data = await resend.emails.send({
      from: "FirstMethod <onboarding@resend.dev>",
      to: "firstmethod.in@gmail.com",
      subject: "New Contact Form Submission",
      html: `
        <p><strong>Full Name:</strong> ${fullName}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Services:</strong> ${services?.join(", ")}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    return new NextResponse(JSON.stringify({ success: true, data }), {
      status: 200,
      headers,
    });
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500, headers }
    );
  }
}

// Handle preflight OPTIONS request (required for CORS)
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers,
  });
}
