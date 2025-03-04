import type { Metadata } from "next";
import {Zen_Maru_Gothic } from "next/font/google";
import "./globals.css";
import ContactModal from "./components/contactModal/contactModal";


const ZenMaru = Zen_Maru_Gothic({
  weight: "400",
  variable: "--font-zen-maru-gothic",
  subsets: ["latin"],
});




export const metadata: Metadata = {
  title: "MyPortfolio",
  description: "SogoReiMyPortfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={ZenMaru.className}
      >
        {children}
        <ContactModal/>
      </body>
    </html>
  );
}
