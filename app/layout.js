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
    default: "Galeriz.ka | Jahit Busana Custom di Lombok",
    template: "%s | Galeriz.ka",
  },
  description:
    "Jahit gamis, kemeja, dan tunik sesuai ukuran badan dan model pilihan Anda di Lombok Timur. Tersedia juga permak dan penyesuaian pakaian.",
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: "Galeriz.ka",
    title: "Galeriz.ka | Jahit Busana Custom di Lombok",
    description:
      "Busana custom sesuai ukuran badan dan model pilihan Anda, dijahit di Lombok Timur.",
  },
  twitter: {
    card: "summary",
    title: "Galeriz.ka | Jahit Busana Custom di Lombok",
    description:
      "Busana custom sesuai ukuran badan dan model pilihan Anda, dijahit di Lombok Timur.",
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
