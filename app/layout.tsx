import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { CartProvider } from "./context/CartContext";
import Cart from "./components/Cart";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Furniro E-commerce App",
  description: "A modern e-commerce app for furniture",
  keywords: ["furniture", "e-commerce", "store", "online shopping"],
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${poppins.variable} antialiased  min-h-screen`}
      >
        <CartProvider>
          <Header />
          <Cart />
          <main className="mx-auto flex-grow">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
