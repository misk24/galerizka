import { Animate } from "@/components/ui/Animate";
import { contacts, socialLinks } from "@/constants/constant";
import { MapPin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black-cherry py-12">
      <Animate delay={200} className="max-w-4xl mx-auto px-4 text-center">
        <div className="text-2xl font-heading text-blush-soft mb-6">Informasi Kontak</div>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-8 text-blush-soft text-sm">
          {contacts.map((contact) => (
            <div key={contact.label} className="flex items-center">
              <Link
                href={contact.href}
                className="flex items-center hover:text-dusty-rose transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blush-soft"
                target="_blank"
                rel="noopener noreferrer"
              >
                {contact.icon}
                <span className="ml-2">{contact.label}</span>
              </Link>
            </div>
          ))}

          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-2" aria-hidden="true" />
            <span>Lombok Timur, NTB</span>
          </div>
        </div>

        <div className="flex justify-center space-x-6 mb-8">
          {socialLinks.map(({ label, href, icon }) => (
            <Link
              key={label}
              href={href}
              className="text-blush-soft hover:text-dusty-rose transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blush-soft"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
            >
              <span className="sr-only">{label}</span>
              {icon}
            </Link>
          ))}
        </div>

        <div className="pt-8 mt-8 border-t border-blush-soft">
          <div className="text-blush-soft text-sm">
            &copy; {currentYear} Galeriz.ka. Hak cipta dilindungi.
          </div>
        </div>
      </Animate>
    </footer>
  );
}
