"use server";

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
      from: "noreply@galerizka.com",
      to: "mail.sk2862@gmail.com",
      subject: "Pesan baru dari form kontak Galerizka",
      html: `
        <h3>Pesan Baru</h3>
        <p><strong>Nama:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subjek:</strong> ${subject}</p>
        <p><strong>Pesan:</strong> ${message}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}