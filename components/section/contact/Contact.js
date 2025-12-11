"use client"

import { Animate } from "@/components/ui/Animate";
import { Button } from "@/components/ui/Button";
import { useState } from "react";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    setStatus(null);

    const form = new FormData(event.target);
    const payload = {
      name: form.get("name"),
      email: form.get("email"),
      subject: form.get("subject"),
      message: form.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Gagal mengirim pesan.");

      setStatus("success");
      event.target.reset();
    } catch (err) {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <Animate delay={200} className="text-center mb-16">
          <span className="inline-block text-dusty-rose text-sm font-bold tracking-wider uppercase mb-3">
            Hubungi Kami
          </span>
          <h2 className="text-3xl md:text-4xl mb-4">
            Mari Berbincang
          </h2>
          <p className="leading-tight">
            Punya pertanyaan atau ingin memesan jasa jahit? Kami siap membantu Anda.
          </p>
        </Animate>
        
        <Animate delay={200} className="max-w-xl mx-auto">
          {/* Contact Form */}
          <div className="bg-white border border-blush-soft p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
            <h3 className="text-xl mb-6">
              Kirim Pesan
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1">
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 text-sm border border-blush-soft focus:ring-1 focus:ring-mulberry-deep transition-all duration-200"
                    placeholder="Nama Lengkap"
                    required
                  />
                </div>
                <div className="space-y-1">
                  <input 
                    type="email" 
                    id="email"
                    name="email" 
                    className="w-full px-4 py-3 text-sm border border-blush-soft focus:ring-1 focus:ring-mulberry-deep transition-all duration-200"
                    placeholder="Email Anda"
                    required
                  />
                </div>
              </div>
              <div className="space-y-1">
                <input 
                  type="text" 
                  id="subject"
                  name="subject" 
                  className="w-full px-4 py-3 text-sm border border-blush-soft focus:ring-1 focus:ring-mulberry-deep transition-all duration-200"
                  placeholder="Subjek"
                />
              </div>
              <div className="space-y-1">
                <textarea 
                  id="message"
                  name="message" 
                  rows="5" 
                  className="w-full px-4 py-3 text-sm border border-blush-soft focus:ring-1 focus:ring-mulberry-deep transition-all duration-200 resize-none"
                  placeholder="Pesan Anda..."
                  required
                />
              </div>
              <div>
                <Button 
                  type="submit" 
                  disabled={loading}
                  className="w-full duration-200 transform hover:-translate-y-0.5"
                >
                  {loading ? "Mengirim..." : "Kirim Pesan"}
                </Button>

                {status === "success" && (
                  <p className="text-green-600 text-sm mt-2">
                    Pesan berhasil dikirim!
                  </p>
                )}

                {status === "error" && (
                  <p className="text-red-600 text-sm mt-2">
                    Terjadi kesalahan. Coba lagi nanti.
                  </p>
                )}
              </div>
            </form>
          </div>
        </Animate>
      </div>
    </section>
  )
}