import Image from "next/image"


import image09 from '@/public/images/image09.jpg'

export default function MainContact() {
  return (
    <div className="relative w-full h-[300px]"> {/* 高さ調整ここで */}
    <Image
        src={image09}
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
             お問い合わせ
            </h1>
            <p className="mt-4 text-center text-gray-300 max-w-3xl mx-auto">
            有限会社北九電機へのお問い合わせは、こちらのメールまたはお電話でお気軽にご連絡ください。
          </p>
          </div>
        </div>
      </div>
    </div>
  )
}
