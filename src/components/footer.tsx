import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className=" flex flex-col items-center  bg-black text-white py-12 ">
      <div className="ml-5 w-full container grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="text-xl font-bold mb-4 text-red-500">有限会社北九電機</h3>
          <div className="space-y-2">
            <p>(本店)</p>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-red-500" />
              <p className="flex flex-col">
                <span>〒804-0025</span>
                <span>福岡県北九州市戸畑区福柳木2丁目5番23号</span>
              </p>
            </div>
            <p className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-red-500" />
              <span>(TEL/FAX)093-882-3025</span>
            </p>
            <p>(工場)</p>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-red-500" />
              <p className="flex flex-col">
                <span>〒802-0979</span>
                <span>福岡県小倉南区徳力新町2丁目18番23号</span>
              </p>
            </div>
            <p className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-red-500" />
              <span>(TEL)093-953-9337:(FAX)093-953-9376</span>
            </p>
          </div>
        </div>
        
        <div className="md:col-span-2 lg:col-span-2">
          <h3 className="text-xl font-bold mb-4 text-red-500">事業内容</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <li>配電盤の製造、修理及び工事施工</li>
            <li>ユニット配線及びケーブル製作</li>
            <li>各種製造機器の設計及び製造</li>
            <li>電気設備工事</li>
            <li>通信設備工事</li>
            <li>各種製造機器、公害監視計の保守、管理</li>
            <li>半導体関連の精密加工部品製作</li>
            <li>建築物、工作物 石綿含有事前調査</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4 text-red-500">リンク</h3>
          <nav className="flex flex-col space-y-2">
            <Link href="/" className="hover:text-red-500 transition-colors">
              ホーム
            </Link>
            <Link href="/company" className="hover:text-red-500 transition-colors">
              会社案内
            </Link>
            <Link href="/services" className="hover:text-red-500 transition-colors">
              事業内容
            </Link>
            <Link href="/careers" className="hover:text-red-500 transition-colors">
              採用案内
            </Link>
            <Link href="/contact" className="hover:text-red-500 transition-colors">
              お問い合わせ
            </Link>
          </nav>
        </div>

      </div>
      <div className="container mt-8 pt-8 border-t border-gray-800">
        <p className="text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} 有限会社北九電機 All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}
