import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

import image01 from '@/public/images/image01.jpg'

export default function HomeMain() {
  return (
    <div className="relative w-full h-[500px]"> {/* 高さ調整ここで */}
    <Image
        src={image01}
        alt="背景画像"
        fill
        className="object-cover z-0"
        priority
    />

      {/* 黒の半透明オーバーレイ */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* コンテンツ */}
      <div className="relative z-20 flex items-center justify-center h-full">
        <div className="container px-4 md:px-6 text-center text-white space-y-6">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
             有限会社　北九電機
            </h1>
            <p className="mx-auto max-w-[700px] text-lg md:text-xl text-gray-300">
              高品質な電気工事と製造サービスを提供
            </p>
          </div>
          <div className="space-x-4">
            <Link href="/services">
              <Button className="bg-red-600 hover:bg-red-700">
                事業内容を見る
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="border-red-600 text-black hover:bg-red-600/20">
                お問い合わせ
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
