import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { firstName, lastName, email, phone, reg, service, message } = await req.json();

    if (!firstName || !email || !message) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: "The Garage Daventry <noreply@thegaragedav.com>",
      to: "info@thegaragedav.com",
      replyTo: email,
      subject: `New enquiry from ${firstName} ${lastName}${service ? ` — ${service}` : ""}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #003A73; padding: 24px 32px; border-radius: 8px 8px 0 0;">
            <h2 style="color: #fff; margin: 0; font-size: 20px;">New Website Enquiry</h2>
          </div>
          <div style="background: #f9f9f9; padding: 32px; border-radius: 0 0 8px 8px; border: 1px solid #e5e5e5; border-top: none;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; color: #666; font-size: 13px; width: 140px;">Name</td><td style="padding: 8px 0; font-weight: 600;">${firstName} ${lastName}</td></tr>
              <tr><td style="padding: 8px 0; color: #666; font-size: 13px;">Email</td><td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #003A73;">${email}</a></td></tr>
              ${phone ? `<tr><td style="padding: 8px 0; color: #666; font-size: 13px;">Phone</td><td style="padding: 8px 0;"><a href="tel:${phone}" style="color: #003A73;">${phone}</a></td></tr>` : ""}
              ${reg ? `<tr><td style="padding: 8px 0; color: #666; font-size: 13px;">Registration</td><td style="padding: 8px 0;">${reg}</td></tr>` : ""}
              ${service ? `<tr><td style="padding: 8px 0; color: #666; font-size: 13px;">Service</td><td style="padding: 8px 0;">${service}</td></tr>` : ""}
            </table>
            <hr style="border: none; border-top: 1px solid #e5e5e5; margin: 20px 0;" />
            <p style="color: #333; line-height: 1.7; margin: 0; white-space: pre-wrap;">${message}</p>
          </div>
          <p style="color: #999; font-size: 11px; text-align: center; margin-top: 16px;">Sent from thegaragedaventry.co.uk contact form</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (err) {
    console.error("Resend error:", err);
    return NextResponse.json({ error: "Failed to send message." }, { status: 500 });
  }
}
