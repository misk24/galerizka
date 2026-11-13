import { Mail } from "lucide-react";
import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

export const whatsappUrl = "https://wa.link/4u5haz";

export const menus = [
  { href: "#home", label: "Beranda" },
  { href: "#about", label: "Tentang Kami" },
  { href: "#services", label: "Layanan" },
  { href: "#portfolio", label: "Hasil Jahitan" },
  { href: "#contact", label: "Kontak" },
];

export const contacts = [
  { 
    icon: <FaWhatsapp size={16} />,
    href: whatsappUrl,
    label: "0877-6337-3270",
  },
  { 
    icon: <Mail size={16} />,
    href: "mailto:rizkans.koryoga03@gmail.com", 
    label: "rizkans.koryoga03@gmail.com",
  },
];

export const socialLinks = [
  {
    icon: <FaTiktok size={20} />,
    label: "Tiktok",
    href: "https://www.tiktok.com/@galeriz.fashion",
  },
  {
    icon: <FaInstagram size={20} />,
    label: "Instagram",
    href: "https://www.instagram.com/galeriz.fashion/",
  },
];