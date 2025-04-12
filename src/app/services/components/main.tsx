
import Image from "next/image"
import image07 from '@/public/images/image07.jpg'

export default function Mainservice() {
  return (
    <div className="relative w-full h-[300px]"> {/* 高さ調整ここで */}
    <Image
        src={image07}
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
            事業内容
            </h1>
            <p className="mt-4 text-center text-gray-300 max-w-3xl mx-auto">
            有限会社北九電機では、幅広い電気工事と製造サービスを提供しています。
            お客様のニーズに合わせた最適なソリューションをご提案いたします。
          </p>
          </div>
        </div>
      </div>
    </div>
  )
}
