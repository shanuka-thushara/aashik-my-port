import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
 try {
  const body = await req.json();
  const { name, email, subject, message } = body;

  if (!name || !email || !subject || !message) {
   return NextResponse.json(
    { error: "Missing required fields" },
    { status: 400 }
   );
  }

  const { data, error } = await resend.emails.send({
   from: "Portfolio Contact <onboarding@resend.dev>",
   to: "aashikdevelop@gmail.com",
   subject: `New Message from ${name}: ${subject}`,
   replyTo: email,
   text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
  });

  if (error) {
   console.error("Resend error:", error);
   return NextResponse.json(
    { error: "Failed to send email" },
    { status: 500 }
   );
  }

  return NextResponse.json(
   { message: "Message sent successfully!", data },
   { status: 200 }
  );
 } catch (error) {
  console.error("Error sending message:", error);
  return NextResponse.json(
   { error: "Failed to send message" },
   { status: 500 }
  );
 }
}
