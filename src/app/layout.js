import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const br = Bricolage_Grotesque({

});

export const metadata = {
  title: "Yaphe Beauty Spa and Home Services",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={br.className}
      >
        {children}
      </body>
    </html>
  );
}
