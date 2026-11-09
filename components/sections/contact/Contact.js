"use client";

import { Animate } from "@/components/ui/Animate";
import { Button } from "@/components/ui/Button";
import { useSubmit } from "./useSubmit";

export default function Contact() {
  const { loading, handleSubmit } = useSubmit();

  return (
    <section id="contact" className="py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <Animate delay={200} className="text-center mb-16">
          <span className="inline-block text-dusty-rose text-sm font-bold tracking-wider uppercase mb-3">
            Hubungi Kami
          </span>
          <h2 className="text-3xl md:text-4xl mb-4">Mari Berbincang</h2>
          <p className="leading-tight">
            Punya pertanyaan atau ingin memesan jasa jahit? Kami siap membantu Anda.
          </p>
        </Animate>

        <Animate delay={200} className="max-w-xl mx-auto">
          <div className="bg-white border border-blush-soft p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
            <h3 className="text-xl mb-6">Kirim Pesan</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="absolute -left-[10000px] h-px w-px overflow-hidden" aria-hidden="true">
                <label htmlFor="website">Jangan isi kolom ini</label>
                <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1">
                  <label htmlFor="name" className="sr-only">Nama lengkap</label>
                  <input type="text" id="name" name="name" autoComplete="name" maxLength={100}
                    className="w-full px-4 py-3 text-sm border border-blush-soft focus:ring-1 focus:ring-mulberry-deep transition-all duration-200"
                    placeholder="Nama Lengkap" required />
                </div>
                <div className="space-y-1">
                  <label htmlFor="email" className="sr-only">Email</label>
                  <input type="email" id="email" name="email" autoComplete="email" maxLength={254}
                    className="w-full px-4 py-3 text-sm border border-blush-soft focus:ring-1 focus:ring-mulberry-deep transition-all duration-200"
                    placeholder="Email Anda" required />
                </div>
              </div>
              <div className="space-y-1">
                <label htmlFor="subject" className="sr-only">Subjek</label>
                <input type="text" id="subject" name="subject" maxLength={150}
                  className="w-full px-4 py-3 text-sm border border-blush-soft focus:ring-1 focus:ring-mulberry-deep transition-all duration-200"
                  placeholder="Subjek" />
              </div>
              <div className="space-y-1">
                <label htmlFor="message" className="sr-only">Pesan</label>
                <textarea id="message" name="message" rows={5} maxLength={5000}
                  className="w-full px-4 py-3 text-sm border border-blush-soft focus:ring-1 focus:ring-mulberry-deep transition-all duration-200 resize-none"
                  placeholder="Pesan Anda..." required />
              </div>
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