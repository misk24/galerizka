import "./globals.css";
import { canela, satoshi } from "./fonts";

export const metadata = {
  title: "Galeriz.ka - Jasa Jahit Busana Lombok",
  description: "Jahit busana custom, rapi, cepat, dan berkualitas untuk segala kebutuhan.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${canela.variable} ${satoshi.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
