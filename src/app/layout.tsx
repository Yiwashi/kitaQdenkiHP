import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "有限会社北九電機",
  description: "配電盤の製造、修理及び工事施工、電気設備工事など幅広いサービスを提供しています。",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <div className="flex  flex-col  justify-center ">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
      </body>
    </html>
  )
}
