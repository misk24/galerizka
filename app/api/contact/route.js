import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactSchema } from "./schema";

export const runtime = "nodejs";
const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  })[character]);
}

export async function POST(req) {
  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not configured.");
    return NextResponse.json({ error: "Layanan kontak sedang tidak tersedia." }, { status: 503 });
  }

  if (!req.headers.get("content-type")?.includes("application/json")) {
    return NextResponse.json({ error: "Content-Type tidak didukung." }, { status: 415 });
  }

  try {
    const rawBody = await req.text();
    if (new TextEncoder().encode(rawBody).byteLength > 16_384) {
      return NextResponse.json({ error: "Ukuran pesan terlalu besar." }, { status: 413 });
    }
    const body = JSON.parse(rawBody);
    const parsed = contactSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Data tidak valid.", issues: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const { name, email, subject, message, website } = parsed.data;
    if (website) {
      return NextResponse.json({ ok: true });
    }
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeSubject = escapeHtml(subject || "(tidak ada)");
    const safeMessage = escapeHtml(message).replace(/\r?\n/g, "<br/>");
    const replySubject = encodeURIComponent(`Re: ${subject || "Pesan dari Galerizka"}`);
    const replyEmail = encodeURIComponent(email);

    const { error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "mail.sk2862@gmail.com",
      subject: "Pesan baru dari form kontak Galerizka",
      html: `<!doctype html>
<html><head><meta charset="utf-8" /><meta name="viewport" content="width=device-width,initial-scale=1" /><title>Pesan Baru dari Galerizka</title></head>
<body style="margin:0;padding:0;background:#f4f6f8;font-family:Arial,Helvetica,sans-serif;color:#111;">
<table role="presentation" width="100%" style="border-collapse:collapse;"><tr><td align="center" style="padding:28px 12px;">
<table role="presentation" width="600" style="max-width:600px;background:#fff;border-radius:12px;overflow:hidden;">
<tr><td style="background:linear-gradient(90deg,#c57c8a,#732c3f);padding:24px 28px;color:#fff;"><h1 style="margin:0;font-size:20px;">Galerizka — Pesan Baru</h1><p style="margin:6px 0 0;font-size:13px;">Ada pengunjung yang menghubungi kamu lewat formulir kontak.</p></td></tr>
<tr><td style="padding:20px 28px;"><p><strong>Nama</strong><br/>${safeName}</p><p><strong>Email</strong><br/>${safeEmail}</p><p><strong>Subjek</strong><br/>${safeSubject}</p><p><strong>Pesan</strong><br/>${safeMessage}</p>
<p style="padding-top:16px;"><a href="mailto:${replyEmail}?subject=${replySubject}" style="display:inline-block;padding:16px 24px;background:#c57c8a;color:#fff;border-radius:8px;text-decoration:none;font-weight:600;">Balas Pengirim</a></p></td></tr>
<tr><td style="background:#f7f9fb;padding:16px 28px;color:#718096;font-size:12px;text-align:center;">Pesan dikirim dari <strong>galerizka.com</strong>. Jika kamu merasa ini salah, abaikan pesan ini.</td></tr>
</table></td></tr></table></body></html>`,
    });

    if (error) {
      console.error("Resend failed to send contact email:", error.name);
      return NextResponse.json({ error: "Pesan gagal dikirim. Silakan coba lagi nanti." }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch (error) {
    if (error instanceof SyntaxError) {
      return NextResponse.json({ error: "Format permintaan tidak valid." }, { status: 400 });
    }
    console.error("Contact endpoint failed:", error?.name || "UnknownError");
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
