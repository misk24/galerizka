import { Mail } from "lucide-react";
import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

export const menus = [
  { href: "#home", label: "Beranda" },
  { href: "#about", label: "Tentang Kami" },
  { href: "#services", label: "Layanan" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#contact", label: "Kontak" },
];

export const contacts = [
  { 
    icon: <FaWhatsapp />,
    href: "https://wa.link/4u5haz", 
    label: "0877 6337 3270",
  },
  { 
    icon: <Mail />,
    href: "mailto:rizkans.koryoga03@gmail.com", 
    label: "rizkans.koryoga03@gmail.com",
  },
];

export const socialLinks = [
  {
    icon: <FaTiktok />,
    label: "Tiktok",
    href: "https://www.tiktok.com/@galeriz.fashion",
  },
  {
    icon: <FaInstagram />,
    label: "Instagram",
    href: "https://www.instagram.com/galeriz.fashion/",
  },
];