import "./globals.css";
import NavBar from "@/components/core/NavBar";
import Footer from "@/components/core/Footer";

export const metadata = {
  title: "Yaphé | Beauté & Événements",
  description: "Services modernes de beauté, spa et décoration d'événements.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="min-h-screen flex flex-col">
        <NavBar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
