import { Mail, MapPin, Phone } from "lucide-react"
import { socialLinks } from "./constant"
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-muted-rose py-12">
      <AnimateOnScroll delay={200} className="max-w-4xl mx-auto px-4 text-center">
        {/* Contact Info */}
        <h3 className="text-xl text-white mb-6">Informasi Kontak</h3>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-8 text-white text-sm">
          <div className="flex items-center">
            <Phone className="h-4 w-4 mr-2" />
            <span>+62 877 3976 0490</span>
          </div>
          <div className="hidden sm:block">•</div>
          <div className="flex items-center">
            <Mail className="h-4 w-4 mr-2" />
            <span>contact@galerizka.com</span>
          </div>
          <div className="hidden sm:block">•</div>
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-2" />
            <span>Lombok Timur, NTB</span>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mb-8">
          {socialLinks.map(({ name, href, icon }) => (
            <a
              key={name}
              href={href}
              className="text-white hover:text-rose-pink transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={name}
            >
              <span className="sr-only">{name}</span>
              {icon}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="pt-8 mt-8 border-t border-white/50">
          <div className="text-white text-sm">
            &copy; {currentYear} Galerizka. All rights reserved.
          </div>
        </div>
      </AnimateOnScroll>
    </footer>
  )
}