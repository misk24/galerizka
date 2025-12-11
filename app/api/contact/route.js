import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactSchema } from "./schema";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Data tidak valid." },
        { status: 400 }
      );
    }

    const { name, email, subject, message } = parsed.data;
    // console.log("DATA MASUK", name, email, subject, message);

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "mail.sk2862@gmail.com",
      subject: "Pesan baru dari form kontak Galerizka",
      html:`
        <!doctype html>
        <html>
          <head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width,initial-scale=1" />
            
            <title>Pesan Baru dari Galerizka</title>
          </head>
          <body style="margin:0;padding:0;background:#f4f6f8;font-family:Arial, Helvetica, sans-serif;color:#111;">
            <table role="presentation" width="100%" style="border-collapse:collapse;">
              <tr>
                <td align="center" style="padding:28px 12px;">
                  <table role="presentation" width="600" style="max-width:600px;background:#ffffff;border-radius:12px;overflow:hidden;">
                    
                    <!-- Header -->
                    <tr>
                      <td style="background:linear-gradient(90deg,#c57c8a,#732c3f);padding:24px 28px;color:#fff;">
                        <h1 style="margin:0;font-size:20px;letter-spacing:0.4px;">Galerizka — Pesan Baru</h1>
                        <p style="margin:6px 0 0;font-size:13px;opacity:0.9;">Ada pengunjung yang menghubungi kamu lewat formulir kontak.</p>
                      </td>
                    </tr>
                    
                    <!-- Body -->
                    <tr>
                      <td style="padding:20px 28px;">
                        <table role="presentation" width="100%" style="border-collapse:collapse;">
                          <tr>
                            <td style="padding-bottom:10px;">
                              <strong style="display:block;font-size:14px;color:#0d1b2a;margin-bottom:6px;">Nama</strong>
                              <div style="font-size:14px;color:#333;">${name}</div>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding-bottom:10px;">
                              <strong style="display:block;font-size:14px;color:#0d1b2a;margin-bottom:6px;">Email</strong>
                              <div style="font-size:14px;color:#333;">${email}</div>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding-bottom:10px;">
                              <strong style="display:block;font-size:14px;color:#0d1b2a;margin-bottom:6px;">Subjek</strong>
                              <div style="font-size:14px;color:#333;">${subject || "(tidak ada)"}</div>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding-bottom:6px;">
                              <strong style="display:block;font-size:14px;color:#0d1b2a;margin-bottom:6px;">Pesan</strong>
                              <div style="font-size:14px;color:#444;line-height:1.5;padding:12px;background:#fbfcfd;border:1px solid #f0f3f6;border-radius:8px;">
                                ${message.replace(/\n/g, "<br/>")}
                              </div>
                            </td>
                          </tr>
                          
                          <!-- CTA row: quick reply -->
                          <tr>
                            <td style="padding-top:16px;">
                              <a href="mailto:${email}?subject=${encodeURIComponent("Re: " + (subject || "Pesan dari Galerizka"))}" style="display:inline-block;padding:16px 24px;background:#c57c8a;color:#fff;border-radius:8px;text-decoration:none;font-weight:600;">
                                Balas Pengirim
                              </a>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    
                    <!-- Footer -->
                    <tr>
                      <td style="background:#f7f9fb;padding:16px 28px;color:#718096;font-size:12px;text-align:center;">
                        Pesan dikirim dari <strong>galerizka.com</strong>. Jika kamu merasa ini salah, abaikan pesan ini.
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </body>
        </html>
      `
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Error details: ", error);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}