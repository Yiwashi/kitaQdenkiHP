"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="ml-5 container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-red-600">有限会社北九電機</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link href="/" className="transition-colors hover:text-red-600">
            ホーム
          </Link>
          <Link href="/company" className="transition-colors hover:text-red-600">
            会社案内
          </Link>
          <Link href="/services" className="transition-colors hover:text-red-600">
            事業内容
          </Link>
          <Link href="/careers" className="transition-colors hover:text-red-600">
            採用案内
          </Link>
          <Link href="/contact" className="transition-colors hover:text-red-600">
            お問い合わせ
          </Link>
        </nav>
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="container md:hidden">
          <nav className="flex flex-col space-y-4 py-4">
            <Link href="/" className="text-lg font-medium transition-colors hover:text-red-600" onClick={toggleMenu}>
              ホーム
            </Link>
            <Link
              href="/company"
              className="text-lg font-medium transition-colors hover:text-red-600"
              onClick={toggleMenu}
            >
              会社案内
            </Link>
            <Link
              href="/services"
              className="text-lg font-medium transition-colors hover:text-red-600"
              onClick={toggleMenu}
            >
              事業内容
            </Link>
            <Link
              href="/careers"
              className="text-lg font-medium transition-colors hover:text-red-600"
              onClick={toggleMenu}
            >
              採用案内
            </Link>
            <Link
              href="/contact"
              className="text-lg font-medium transition-colors hover:text-red-600"
              onClick={toggleMenu}
            >
              お問い合わせ
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
