import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  const contactItems = [
    {
      icon: <MapPin size={20} />,
      title: "Lokasi",
      content: "Jl. Contoh No. 123, Kota Anda"
    },
    {
      icon: <Phone size={20} />,
      title: "Telepon",
      content: "+62 123 4567 890"
    },
    {
      icon: <Mail size={20} />,
      title: "Email",
      content: "info@galerizka.com"
    }
  ];

  return (
    <section id="contact" className="py-24 lg:py-40 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-medium text-muted-rose mb-3">Hubungi Kami</span>
          <h2 className="text-4xl font-bold text-dark-charcoal mb-4">Mari Berbincang</h2>
          <p className="text-dark-charcoal/70 max-w-2xl mx-auto">
            Punya pertanyaan atau ingin memesan jasa jahit? Kami siap membantu Anda.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="bg-white border border-soft-pink rounded-[20px] p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-dark-charcoal mb-6">Kirim Pesan</h3>
            <form className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1">
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 text-sm border border-gray-200 rounded-lg focus:ring-1 focus:ring-pink-500 focus:border-pink-500 transition-all duration-200"
                    placeholder="Nama Lengkap"
                  />
                </div>
                <div className="space-y-1">
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 text-sm border border-gray-200 rounded-lg focus:ring-1 focus:ring-pink-500 focus:border-pink-500 transition-all duration-200"
                    placeholder="Email Anda"
                  />
                </div>
              </div>
              <div className="space-y-1">
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full px-4 py-3 text-sm border border-gray-200 rounded-lg focus:ring-1 focus:ring-pink-500 focus:border-pink-500 transition-all duration-200"
                  placeholder="Subjek"
                />
              </div>
              <div className="space-y-1">
                <textarea 
                  id="message" 
                  rows="5" 
                  className="w-full px-4 py-3 text-sm border border-gray-200 rounded-lg focus:ring-1 focus:ring-pink-500 focus:border-pink-500 transition-all duration-200 resize-none"
                  placeholder="Pesan Anda..."
                ></textarea>
              </div>
              <div>
                <button 
                  type="submit" 
                  className="w-full bg-muted-rose text-white py-3 px-6 rounded-lg font-medium hover:bg-pink-700 transition-colors duration-200 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
                >
                  Kirim Pesan
                </button>
              </div>
            </form>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-dark-charcoal">Informasi Kontak</h3>
              <p className="text-dark-charcoal/70">
                Jangan ragu untuk menghubungi kami kapan saja. Tim kami akan dengan senang hati membantu Anda.
              </p>
            </div>
            
            <div className="space-y-6">
              {contactItems.map((item, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-muted-rose group-hover:bg-soft-pink transition-colors duration-200">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-dark-charcoal">{item.title}</h4>
                    <p className="text-dark-charcoal/70">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="pt-4">
              <h4 className="text-sm font-medium text-dark-charcoal/70 mb-3">Jam Operasional</h4>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-dark-charcoal/70">Senin - Jumat</span>
                  <span className="text-dark-charcoal font-medium">09:00 - 17:00 WIB</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-dark-charcoal/70">Sabtu</span>
                  <span className="text-dark-charcoal font-medium">09:00 - 14:00 WIB</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-dark-charcoal/70">Minggu</span>
                  <span className="text-dark-charcoal font-medium">Tutup</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}