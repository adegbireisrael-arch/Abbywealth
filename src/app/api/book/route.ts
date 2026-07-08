import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, phone, email, service, date, time, message } = data;

    // Retrieve credentials from environment variables
    const userEmail = process.env.EMAIL_USER;
    const userPass = process.env.EMAIL_PASS;

    if (!userEmail || !userPass) {
      console.warn("Email credentials not configured. Simulating success for development.");
      // In development/preview without credentials, simulate a successful submission.
      return NextResponse.json({ success: true, simulated: true });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: userEmail,
        pass: userPass,
      },
    });

    const mailOptions = {
      from: userEmail,
      to: "abigailaremu432@gmail.com",
      subject: `New Booking Request: ${service} for ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #111111; text-align: center; border-bottom: 2px solid #F5E9E2; padding-bottom: 10px;">New Appointment Request</h2>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; width: 40%;">Full Name:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Phone Number:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Email Address:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Service:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${service}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Preferred Date:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${date}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Preferred Time:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${time}</td>
            </tr>
          </table>

          ${message ? `
            <div style="margin-top: 20px; background-color: #FCFCFC; padding: 15px; border-radius: 5px;">
              <p style="margin: 0; font-weight: bold;">Message:</p>
              <p style="margin: 5px 0 0 0; color: #555;">${message}</p>
            </div>
          ` : ""}
          
          <p style="text-align: center; margin-top: 30px; font-size: 12px; color: #999;">
            This email was sent automatically from the Abbywealth website booking form.
          </p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
