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

export const metadata = {
  metadataBase: new URL("https://galerizka.com"),
  title: {
    default: "Galeriz.ka | Jasa Jahit Busana di Lombok",
    template: "%s | Galeriz.ka",
  },
  description:
    "Jasa jahit busana custom di Lombok. Wujudkan busana sesuai kebutuhan dengan hasil rapi, nyaman, dan berkualitas.",
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: "Galeriz.ka",
    title: "Galeriz.ka | Jasa Jahit Busana di Lombok",
    description:
      "Jasa jahit busana custom di Lombok dengan hasil rapi dan berkualitas.",
    url: "https://galerizka.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Galeriz.ka | Jasa Jahit Busana di Lombok",
    description:
      "Jasa jahit busana custom di Lombok dengan hasil rapi dan berkualitas.",
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
