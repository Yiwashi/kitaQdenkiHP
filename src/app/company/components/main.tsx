import Image from "next/image"


import image06 from '@/public/images/image06.jpg'

export default function MainCompany() {
  return (
    <div className="relative w-full h-[300px]"> {/* 高さ調整ここで */}
    <Image
        src={image06}
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
             会社案内
            </h1>
            
          </div>
        </div>
      </div>
    </div>
  )
}
