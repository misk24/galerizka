import { Button } from "@/components/ui/Button";
import { contactItems } from "./constant";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

export default function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <AnimateOnScroll delay={200} className="text-center mb-16">
          <span className="inline-block text-muted-rose text-sm font-bold tracking-wider uppercase mb-3">
            Hubungi Kami
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-dark-charcoal mb-4">
            Mari Berbincang
          </h2>
          <p className="text-dark-charcoal/70 text-lg font-medium">
            Punya pertanyaan atau ingin memesan jasa jahit?<br/>Kami siap membantu Anda.
          </p>
        </AnimateOnScroll>
        
        <AnimateOnScroll delay={200} className="max-w-xl mx-auto">
          {/* Contact Form */}
          <div className="bg-white border border-warm-gray p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
            <h3 className="text-xl font-bold text-dark-charcoal mb-6">
              Kirim Pesan
            </h3>
            <form className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1">
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 text-sm border border-gray-200 focus:ring-1 focus:ring-pink-500 focus:border-pink-500 transition-all duration-200"
                    placeholder="Nama Lengkap"
                  />
                </div>
                <div className="space-y-1">
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 text-sm border border-gray-200 focus:ring-1 focus:ring-pink-500 focus:border-pink-500 transition-all duration-200"
                    placeholder="Email Anda"
                  />
                </div>
              </div>
              <div className="space-y-1">
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full px-4 py-3 text-sm border border-gray-200 focus:ring-1 focus:ring-pink-500 focus:border-pink-500 transition-all duration-200"
                  placeholder="Subjek"
                />
              </div>
              <div className="space-y-1">
                <textarea 
                  id="message" 
                  rows="5" 
                  className="w-full px-4 py-3 text-sm border border-gray-200 focus:ring-1 focus:ring-pink-500 focus:border-pink-500 transition-all duration-200 resize-none"
                  placeholder="Pesan Anda..."
                />
              </div>
              <div>
                <Button 
                  type="submit" 
                  className="w-full duration-200 transform hover:-translate-y-0.5"
                >
                  Kirim Pesan
                </Button>
              </div>
            </form>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}