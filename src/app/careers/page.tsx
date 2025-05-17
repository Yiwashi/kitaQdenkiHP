import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Briefcase } from "lucide-react"
import Maincareer from "./components/main"

export default function CareersPage() {
  return (
    <>
      <Maincareer />

      <div className="mt-12 w-full ">
        <div className="m-0 md:m-12">

      <h2 className="text-3xl font-bold mb-10 flex flex-col items-center text-red-600">Job Openings</h2>


      <Card className="">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Briefcase className="h-6 w-6 text-red-600 mr-2" />
                <h3 className="text-xl font-bold">電気工事・電気通信工事作業員</h3>
              </div>
              <table className="w-full text-left text-gray-700">
                <tbody>
                  <tr><th className="font-semibold py-2 md:align-top align-baseline">仕事内容</th>
                  <td  className="md:align-top align-baseline">
                  <p>電気工事（設備電機工事 生産機器内電気工事）</p>
                  <p>電気通信工事 （ＬＡＮ工事 電話工事）</p>
                  <p>生産設備内 電気計装工事</p>
                  <p>制御盤及び分電盤等 生産設備用制御盤の設計及び制作設置</p>
                  <p>環境分析装置 設置及びメンテナンス</p>
                  <p>半導体関連の精密加工部品製作</p>
                  <p>ユニット配線及びケーブル制作</p>
                  </td></tr>
                  <tr><th className="font-semibold py-2 md:align-top align-baseline">雇用形態</th><td className="md:align-top align-baseline">正社員</td></tr>
                  <tr><th className="font-semibold py-2 align-top">就業場所</th><td>工場</td></tr>
                  <tr><th className="font-semibold py-2 align-top">年齢制限</th><td>あり（44歳以下）</td></tr>
                  <tr><th className="font-semibold py-2 align-top">賃金・手当</th><td>月額(a+b)20万円〜40万円</td></tr>
                  <tr><th className="font-semibold py-2 align-top">労働時間</th><td>8:30〜17:30</td></tr>
                  <tr><th className="font-semibold py-2 align-top">休日等</th><td>週休2日制</td></tr>
                  <tr><th className="font-semibold py-2 align-top">採用人数</th><td>2人</td></tr>
                </tbody>
              </table>
              <div className="mt-6">
                <Link href="/pdf/kyuzin.pdf">
                  <Button className="bg-red-600 hover:bg-red-700">
                    
                    詳細はこちら
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
          </div>
          </div>
    </>
  )
}
