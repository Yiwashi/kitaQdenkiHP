import Link from "next/link"

import { Button } from "@/components/ui/button"
import { ArrowRight,  PenToolIcon as Tool, Settings, Users, Phone } from "lucide-react"


export default function CareerHome() {
  return (
      <div className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-red-600">採用案内</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                一緒に働く仲間を募集しています。私たちと共に成長しませんか？
              </p>
            </div>
            <div className="pt-4">
              <Link href="/careers">
                <Button className="bg-red-600 hover:bg-red-700">
                  採用情報の詳細を見る
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
    </div>
  )
}
