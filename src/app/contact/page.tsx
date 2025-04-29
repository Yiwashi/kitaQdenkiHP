"use client"

import { Mail, Phone } from "lucide-react"
import MainContact from "./components/main"

export default function ContactPage() {
  return (
    <>
      <MainContact />

      <div className="w-full py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-center text-red-600">
            Contact us
          </h2>

          <div className="flex flex-col lg:flex-row justify-center items-center gap-12 text-xl mb-16">
            {/* メール */}
            <div className="flex items-start gap-6 max-w-md">
              <Mail className="h-10 w-10 text-red-600 mt-1" />
              <div>
                <h3 className="text-2xl font-bold mb-2">メールでのお問い合わせ</h3>
                <a
                  href="mailto:info@kitakyushu-electric.co.jp?subject=お問い合わせ"
                  className="text-blue-600 underline text-lg"
                >
                  info@kitakyushu-electric.co.jp
                </a>
              </div>
            </div>

            {/* 電話 */}
            <div className="flex items-start gap-6 max-w-md">
              <Phone className="h-10 w-10 text-red-600 mt-1" />
              <div>
                <h3 className="text-2xl font-bold mb-2">お電話でのお問い合わせ(工場)</h3>
                <a href="tel:0938823025" className="text-blue-600 underline text-lg">
                  093-953-9337
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
