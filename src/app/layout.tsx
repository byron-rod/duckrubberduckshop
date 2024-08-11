import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { WixClientContextProvider } from "@/context/wixContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Duck Rubber Duck Shop",
  description: "The Best Clothing Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" href="/ducklogo.png" as="image" />
      </head>
      <body className={inter.className}>
        <WixClientContextProvider>
          <NavBar />
          {children}
          <Footer />
        </WixClientContextProvider>
      </body>
    </html>
  );
}
