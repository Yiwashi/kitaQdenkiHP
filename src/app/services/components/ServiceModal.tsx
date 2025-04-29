'use client'

import { useState, useEffect } from 'react'
import type { StaticImageData } from 'next/image'
import Modal from 'react-modal'
import Image from 'next/image'

type Props = {
  isOpen: boolean
  onClose: () => void
  title: string
  images: StaticImageData[]
}

export default function ServiceModal({ isOpen, onClose, title, images }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0)

  // 自動スライド（3秒ごと）
  useEffect(() => {
    if (!isOpen) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [isOpen, images.length])

  const handleThumbnailClick = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <Modal
  isOpen={isOpen}
  onRequestClose={onClose}
  ariaHideApp={false}
  className="p-6 bg-white w-[600px] h-[700px] mx-auto mt-20 rounded-lg shadow-xl outline-none flex flex-col"  // ← サイズを固定 & flexで中身縦並び
  overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
>
  <h2 className="text-lg font-bold mb-4 text-center">{title}</h2>

  <div className="flex-1 flex justify-center items-center mb-4"> {/* ← flexで中央に */}
    <div className="relative w-[500px] h-[400px]"> {/* ← 画像枠も固定サイズ */}
      <Image
        src={images[currentIndex]}
        alt={`${title}-main-${currentIndex}`}
        className="rounded-lg object-contain"
        fill  // ← これ！fill使うことで「枠内でいい感じに縮尺調整」
      />
    </div>
  </div>

  <div className="flex justify-center gap-2 overflow-x-auto mb-4">
    {images.map((img, index) => (
      <button
        key={index}
        onClick={() => handleThumbnailClick(index)}
        className={`border-2 ${index === currentIndex ? 'border-blue-500' : 'border-transparent'} rounded`}
      >
        <Image
          src={img}
          alt={`${title}-thumb-${index}`}
          className="rounded"
          onContextMenu={(e) => e.preventDefault()}
          width={50}
          height={40}
        />
      </button>
    ))}
  </div>

  <div className="text-center">
    <button onClick={onClose} className="text-red-600 text-sm hover:underline">
      閉じる
    </button>
  </div>
</Modal>


  )
}
