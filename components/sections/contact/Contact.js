"use client";

import { Animate } from "@/components/ui/Animate";
import { Button } from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import { contacts } from "@/constants/constant";
import { externalLinkProps } from "@/lib/links";
import { MapPin, Send } from "lucide-react";
import { useSubmit } from "./useSubmit";

const field =
  "w-full rounded-lg border border-dusty-rose bg-white px-4 py-3 text-base text-foreground placeholder:text-foreground/60 focus:border-mulberry-deep focus:outline-2 focus:outline-offset-0 focus:outline-mulberry-deep";
const label = "mb-1.5 block text-sm font-medium text-foreground";

export default function Contact() {
  const { loading, feedback, handleSubmit } = useSubmit();

  return (
    <section id="contact" className="py-24 lg:py-32">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-5 lg:gap-20 lg:px-8">
        <Animate delay={200} className="lg:col-span-2">
          <SectionHeading eyebrow="Kontak" title="Ceritakan pesanan Anda." className="mb-8">
            Tanya model, bahan, atau estimasi waktu. Isi formulir ini, atau langsung hubungi kami lewat WhatsApp.
          </SectionHeading>
          <ul className="space-y-4">
            {contacts.map((contact) => (
              <li key={contact.href}>
                <a
                  href={contact.href}
                  {...externalLinkProps(contact.href)}
                  className="inline-flex items-center gap-3 font-medium text-mulberry-deep underline-offset-4 hover:underline"
                >
                  {contact.icon}
                  {contact.label}
                </a>
              </li>
            ))}
            <li className="inline-flex items-center gap-3">
              <MapPin aria-hidden="true" className="h-4 w-4 text-mulberry-deep" />
              Lombok Timur, NTB
            </li>
          </ul>
        </Animate>

        <Animate delay={300} className="lg:col-span-3">
          <form
            onSubmit={handleSubmit}
            className="space-y-5 rounded-2xl border border-dusty-rose/40 bg-blush-soft/50 p-6 sm:p-8"
            aria-busy={loading}
          >
            <div className="absolute -left-[10000px] h-px w-px overflow-hidden" aria-hidden="true">
              <label htmlFor="website">Jangan isi kolom ini</label>
              <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label htmlFor="name" className={label}>Nama lengkap</label>
                <input type="text" id="name" name="name" autoComplete="name" maxLength={100} className={field} required />
              </div>
              <div>
                <label htmlFor="email" className={label}>Email</label>
                <input type="email" id="email" name="email" autoComplete="email" maxLength={254} className={field} required />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className={label}>Subjek (opsional)</label>
              <input type="text" id="subject" name="subject" maxLength={150} className={field} placeholder="Contoh: Gamis batik untuk acara keluarga" />
            </div>
            <div>
              <label htmlFor="message" className={label}>Pesan</label>
              <textarea id="message" name="message" rows={5} maxLength={5000} className={`${field} resize-none`} placeholder="Model, bahan, ukuran, dan tanggal yang Anda butuhkan" required />
            </div>
            {feedback.message && (
              <p
                className={`text-sm font-medium ${feedback.type === "error" ? "text-red-700" : "text-green-800"}`}
                role={feedback.type === "error" ? "alert" : "status"}
                aria-live={feedback.type === "error" ? "assertive" : "polite"}
              >
                {feedback.message}
              </p>
            )}
            <Button type="submit" disabled={loading} loading={loading} className="w-full">
              {!loading && <Send aria-hidden="true" className="h-4 w-4" />}
              {loading ? "Mengirim..." : "Kirim Pesan"}
            </Button>
          </form>
        </Animate>
      </div>
    </section>
  );
}
