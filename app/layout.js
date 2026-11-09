import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata = {
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  title: {
    default: "Galeriz.ka | Jasa Jahit Busana di Lombok",
    template: "%s | Galeriz.ka",
  },
  description:
    "Galeriz.ka menerima pesanan jahit busana sesuai ukuran dan model, serta layanan penyesuaian pakaian di Lombok.",
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: "Galeriz.ka",
    title: "Galeriz.ka | Jasa Jahit Busana di Lombok",
    description:
      "Pesanan jahit busana sesuai ukuran dan model, serta layanan penyesuaian pakaian di Lombok.",
  },
  twitter: {
    card: "summary",
    title: "Galeriz.ka | Jasa Jahit Busana di Lombok",
    description:
      "Pesanan jahit busana sesuai ukuran dan model, serta layanan penyesuaian pakaian di Lombok.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${cormorant.variable} ${inter.variable} antialiased`}>
        <Toaster position="top-center" reverseOrder={false} />
        {children}
      </body>
    </html>
  );
}
