import Image from "next/image"
import image08 from '@/public/images/image08.jpg'

export default function Maincareer() {
  return (
    <div className="relative w-full h-[300px]"> {/* 高さ調整ここで */}
    <Image
        src={image08}
        alt="背景画像"
        fill
        className="object-cover z-0"
        priority
    />

      {/* 黒の半透明オーバーレイ */}
      <div className="absolute inset-0 bg-black/80 z-10" />

      {/* コンテンツ */}
      <div className="relative z-20 flex items-center justify-center h-full">
        <div className="container px-4 md:px-6 text-center  text-white space-y-6">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            採用案内
            </h1>
            <p className="mt-4 text-center text-gray-300 max-w-3xl mx-auto">
            有限会社北九電機では、共に成長し、未来を創る仲間を募集しています。
          </p>
          </div>
        </div>
      </div>
    </div>
  )
}
