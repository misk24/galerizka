import { menu } from "@/constants/menu"
import { services } from "@/constants/services"
import { Mail, MapPin, Phone } from "lucide-react"
import Image from "next/image"


const socialLinks = [
  {
    name: 'Facebook',
    href: '#',
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
      </svg>
    )
  },
  {
    name: 'Instagram',
    href: '#',
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
      </svg>
    )
  },
  {
    name: 'WhatsApp',
    href: '#',
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.966-.273-.099-.471-.148-.67.15-.197.297-.767.963-.94 1.16-.173.199-.347.221-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.795-1.484-1.784-1.66-2.087-.173-.297-.018-.458.13-.605.136-.135.296-.345.445-.523.146-.181.194-.301.297-.497.1-.21.049-.375-.025-.524-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.51-.669-.52-.173-.008-.371-.01-.571-.01-.2 0-.523.074-.797.36-.273.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.195 2.104 3.195 5.1 4.485.714.3 1.27.489 1.703.625.714.227 1.365.195 1.879.121.574-.091 1.767-.721 2.016-1.426.255-.705.255-1.29.18-1.425-.074-.135-.27-.21-.571-.345m-5.446 7.443h-.016a9.07 9.07 0 01-5.031-1.5l-.36-.214-3.741.982.998-3.648-.235-.374a9.09 9.09 0 01-1.39-4.8 9.13 9.13 0 012.86-6.53 9.21 9.21 0 016.5-2.64 9.2 9.2 0 016.54 2.64 9.2 9.2 0 012.64 6.54 9.2 9.2 0 01-2.64 6.54 9.2 9.2 0 01-6.536 2.64z" />
      </svg>
    )
  }
]

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-muted-rose">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Info */}
          <div className="space-y-5">
            <div className="flex items-center space-x-2">
              <Image 
                src="/images/logo/logo-white.png"
                alt="Galeriz.ka"
                width={120}
                height={60}
                className="h-16 w-auto object-contain"
                priority
              />
            </div>
            <p className="text-white text-sm leading-relaxed">
              Jasa jahit profesional dengan kualitas terbaik dan hasil yang memuaskan untuk penampilan yang sempurna.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(({ name, href, icon }) => (
                <a
                  key={name}
                  href={href}
                  className="text-white hover:text-rose-pink transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                >
                  <span className="sr-only">
                    {name}
                  </span>
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Tautan Cepat
            </h3>
            <ul className="space-y-3">
              {menu.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="text-white hover:text-rose-pink text-sm transition-colors duration-200">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Layanan
            </h3>
            <ul className="space-y-3">
              {services.map(({ title, href }) => (
                <li key={title}>
                  <a href={href} className="text-white hover:text-rose-pink text-sm transition-colors duration-200">
                    {title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Kontak
            </h3>
            <address className="not-italic text-white space-y-3 text-sm">
              <div className="flex items-start">
                <MapPin size={20} className="mr-3" />
                <span>
                  Lombok Timur, NTB, Indonesia
                </span>
              </div>
              <div className="flex items-start">
                <Phone size={20} className="mr-3" />
                <a href="tel:+6281234567890" className="text-white hover:text-rose-pink text-sm transition-colors duration-200">
                  +62 812 3456 7890
                </a>
              </div>
              <div className="flex items-start">
                <Mail size={20} className="mr-3" />
                <a href="mailto:info@galerizka.com" className="text-white hover:text-rose-pink text-sm transition-colors duration-200">
                  info@galerizka.com
                </a>
              </div>
            </address>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-warm-gray">
          <p className="text-center text-sm text-white">
            &copy; {currentYear} Galeriz.ka. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}