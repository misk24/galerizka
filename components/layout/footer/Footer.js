import { contacts, socialLinks } from "@/constants/constant"
import { externalLinkProps } from "@/lib/links"
import { MapPin } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black-cherry py-14 text-blush-soft">
      <div className="mx-auto max-w-6xl px-6 text-center lg:px-8">
        <p className="font-heading text-3xl">Galeriz.ka</p>
        <p className="mx-auto mt-2 mb-8 max-w-md text-sm">
          Jahit busana custom di Lombok Timur, dibuat sesuai ukuran dan model Anda.
        </p>

        <ul className="mb-8 flex flex-col items-center justify-center gap-4 text-sm sm:flex-row sm:gap-8">
          {contacts.map((contact) => (
            <li key={contact.label}>
              <a
                href={contact.href}
                className="inline-flex items-center gap-2 transition-colors hover:text-dusty-rose"
                {...externalLinkProps(contact.href)}
              >
                {contact.icon}
                {contact.label}
              </a>
            </li>
          ))}
          <li className="inline-flex items-center gap-2">
            <MapPin aria-hidden="true" className="h-4 w-4" />
            Lombok Timur, NTB
          </li>
        </ul>

        <ul className="mb-10 flex justify-center gap-6">
          {socialLinks.map(({ label, href, icon }) => (
            <li key={label}>
              <a
                href={href}
                className="transition-colors hover:text-dusty-rose"
                {...externalLinkProps(href)}
                aria-label={label}
              >
                {icon}
              </a>
            </li>
          ))}
        </ul>

        <p className="border-t border-blush-soft/20 pt-8 text-sm">
          &copy; {currentYear} Galeriz.ka by Rizka Koryoga. Hak cipta dilindungi.
        </p>
      </div>
    </footer>
  )
}
