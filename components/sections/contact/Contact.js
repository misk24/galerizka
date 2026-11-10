"use client";

import { Animate } from "@/components/ui/Animate";
import { Button } from "@/components/ui/Button";
import { useSubmit } from "./useSubmit";

const fieldClassName =
  "w-full px-4 py-3 text-sm border border-blush-soft rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mulberry-deep transition-all duration-200";

const labelClassName = "block text-sm font-medium text-black-cherry mb-2";

export default function Contact() {
  const { loading, feedback, handleSubmit } = useSubmit();

  return (
    <section id="contact" aria-labelledby="contact-title" className="py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <Animate delay={200} className="text-center mb-16">
          <span className="inline-block text-mulberry-deep text-sm font-bold tracking-wider uppercase mb-3">
            Hubungi Kami
          </span>
          <h2 id="contact-title" className="text-3xl md:text-4xl mb-4">Mari Berbincang</h2>
          <p className="leading-tight">
            Punya pertanyaan atau ingin memesan jasa jahit? Kami siap membantu Anda.
          </p>
        </Animate>

        <Animate delay={200} className="max-w-xl mx-auto">
          <div className="bg-white border border-blush-soft p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
            <h3 className="text-xl mb-6">Kirim Pesan</h3>
            <form onSubmit={handleSubmit} className="space-y-5" aria-busy={loading}>
              <div className="absolute -left-[10000px] h-px w-px overflow-hidden" aria-hidden="true">
                <label htmlFor="website">Jangan isi kolom ini</label>
                <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className={labelClassName}>Nama lengkap</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    autoComplete="name"
                    maxLength={100}
                    className={fieldClassName}
                    placeholder="Masukkan nama Anda"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className={labelClassName}>Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    autoComplete="email"
                    maxLength={254}
                    className={fieldClassName}
                    placeholder="nama@contoh.com"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className={labelClassName}>Subjek <span className="font-normal text-gray-600">(opsional)</span></label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  maxLength={150}
                  className={fieldClassName}
                  placeholder="Topik pesan"
                />
              </div>
              <div>
                <label htmlFor="message" className={labelClassName}>Pesan</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  maxLength={5000}
                  className={`${fieldClassName} resize-y`}
                  placeholder="Ceritakan kebutuhan atau pertanyaan Anda"
                  required
                />
              </div>
              {feedback.message && (
                <p
                  className={`text-sm ${feedback.type === "error" ? "text-red-700" : "text-green-700"}`}
                  role={feedback.type === "error" ? "alert" : "status"}
                  aria-live={feedback.type === "error" ? "assertive" : "polite"}
                >
                  {feedback.message}
                </p>
              )}
              <Button type="submit" disabled={loading} className="w-full duration-200 transform hover:-translate-y-0.5">
                {loading ? "Mengirim..." : "Kirim Pesan"}
              </Button>
            </form>
          </div>
        </Animate>
      </div>
    </section>
  );
}
