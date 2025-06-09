"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image, { StaticImageData } from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"

import image02 from '@/public/images/image02.jpg'
import image03 from '@/public/images/image03.jpg'
import image04 from '@/public/images/image04.jpg'
import image05 from '@/public/images/image05.jpg'

const slides: { src: StaticImageData, client: string }[] = [
  { src: image02, client: "" },
  { src: image03, client: "" },
  { src: image04, client: "" },
  { src: image05, client: "" },
]

export default function CompanyHome() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % slides.length)
  }

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div className="w-full bg-gray-300 text-white p-1 md:py-24">
      <div className="flex  px-1 md:px-6 items-center justify-center m-12 md:mt-1">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-cente">
          {/* 左側テキスト */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-red-500">信頼と実績</h2>
            <p className="text-gray-800">
            有限会社　北九電機は、長年の経験と技術力で、お客様のニーズに応える高品質なサービスを提供しています。私たちは常に最新の技術と知識を取り入れ、安全で効率的な電気工事と製造サービスを実現しています。
            </p>
            <div className="pt-4">
              <Link href="/company">
                <Button className="bg-red-600 hover:bg-red-700">
                  会社案内を見る
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>

          {/* 右側スライドショー */}
          <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden group">
            {/* 画像 */}
            <Image
              src={slides[current].src}
              alt={`スライド${current + 1}`}
              fill
              className="object-cover transition duration-500 ease-in-out"
            />

            {/* クライアント名ラベル */}
            <div className="absolute bottom-4 right-4 bg-black/60 text-white text-sm px-3 py-1 rounded-lg">
              {slides[current].client}
            </div>

            {/* 矢印ナビゲーション（ホバー時表示） */}
            <button
              onClick={handlePrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition"
            >
              <ChevronRight size={24} />
            </button>

            {/* インジケーター */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === current ? "bg-red-500 scale-110" : "bg-white/50"
                  }`}
                  onClick={() => setCurrent(index)}
                  aria-label={`スライド ${index + 1} に移動`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
