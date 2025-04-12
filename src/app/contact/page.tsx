"use client"

import type React from "react"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import MainContact from "./components/main"


export default function ContactPage() {



  return (
    <>
      <MainContact/>
 
      <div className="w-full ">
      <div className=" m-12">
      <h2 className="text-3xl font-bold mb-10 flex flex-col items-center text-red-600">Contact us</h2>
            <div className="flex flex-col items-center">
            <div className="space-y-4 text-xl ">
              <div className="flex items-start space-x-3">
                <Mail className="h-6 w-6 text-red-600 mt-0.5" />
                <div>
                  <h3 className="font-bold mb-3">メールでのお問い合わせ</h3>
                  <a
                    href="mailto:info@kitakyushu-electric.co.jp?subject=お問い合わせ"
                    className="text-blue-600 underline"
                  >
                    info@kitakyushu-electric.co.jp
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Phone className="h-7 w-7 text-red-600 mt-0.5" />
                <div>
                  <h3 className="font-bold">お電話でのお問い合わせ</h3>
                  <div><p className="text-base ">(工場)</p>
                    <a href="tel:0938823025" className="text-blue-600 underline">
                    093-882-3025
                    </a>
                  </div>
                </div>
                
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-red-600 mt-0.5" />
                <div>
                  <h3 className="font-bold">アクセス</h3>
                  <p className="text-base ">(工場)</p>
                  <p className="text-gray-600">〒802-0979 福岡県小倉南区徳力新町2丁目18番23号</p>
                  <p className="text-sm text-gray-500">北九州モノレール 守恒駅 から 徒歩15分</p>
                  <div className="w-full  bg-gray-100 rounded-md flex items-center justify-center">
                        <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6628.199029496838!2d130.8623307764477!3d33.83554417323934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3543c6db00cd394f%3A0x4edffa16866d8b3f!2z44CSODAyLTA5Nzkg56aP5bKh55yM5YyX5Lmd5bee5biC5bCP5YCJ5Y2X5Yy65b6z5Yqb5paw55S677yS5LiB55uu77yR77yY4oiS77yS77yTIOW3neWOn-WAieW6q-S6i-WLmeaJgA!5e0!3m2!1sja!2sjp!4v1744484827067!5m2!1sja!2sjp"
                        width="100%"
                        height="500"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                  </div>
                </div>
              </div>
            </div>
            </div>

      </div>
      </div>
    </>
  )
}
