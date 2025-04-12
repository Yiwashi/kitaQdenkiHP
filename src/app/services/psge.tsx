import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Zap, Shield, PenToolIcon as Tool, Settings, Users, FileSearch } from "lucide-react"

export default function ServicesPage() {
  return (
    <>
      <section className="bg-black text-white py-16">
        <div className="container px-4 md:px-6">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center text-red-500">
            事業内容
          </h1>
          <p className="mt-4 text-center text-gray-300 max-w-3xl mx-auto">
            株式会社北九州電機では、幅広い電気工事と製造サービスを提供しています。
            お客様のニーズに合わせた最適なソリューションをご提案いたします。
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="distribution" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mb-8">
              <TabsTrigger value="distribution">配電盤</TabsTrigger>
              <TabsTrigger value="wiring">配線・ケーブル</TabsTrigger>
              <TabsTrigger value="equipment">製造機器</TabsTrigger>
              <TabsTrigger value="electrical">電気設備</TabsTrigger>
              <TabsTrigger value="maintenance">保守・管理</TabsTrigger>
              <TabsTrigger value="asbestos">石綿調査</TabsTrigger>
            </TabsList>
            <TabsContent value="distribution" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-red-600">配電盤の製造、修理及び工事施工</h2>
                  <p className="text-gray-600 mb-4">
                    高品質な配電盤の製造から修理、工事施工まで一貫して対応いたします。
                    お客様の要望に合わせたカスタム設計も可能です。
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Zap className="h-5 w-5 text-red-600 mr-2" />
                      <span>高品質な配電盤の製造</span>
                    </li>
                    <li className="flex items-center">
                      <Zap className="h-5 w-5 text-red-600 mr-2" />
                      <span>迅速な修理対応</span>
                    </li>
                    <li className="flex items-center">
                      <Zap className="h-5 w-5 text-red-600 mr-2" />
                      <span>安全な工事施工</span>
                    </li>
                  </ul>
                </div>
                <div className="relative h-[300px] rounded-lg overflow-hidden">
                  <Image src="/placeholder.svg?height=300&width=500" alt="配電盤" fill className="object-cover" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="relative h-[200px] mb-4 rounded overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=200&width=300"
                        alt="配電盤の製造"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="text-lg font-bold mb-2">配電盤の製造</h3>
                    <p className="text-gray-500 text-sm">
                      最新の技術と設備を用いた高品質な配電盤の製造を行っています。
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="relative h-[200px] mb-4 rounded overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=200&width=300"
                        alt="配電盤の修理"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="text-lg font-bold mb-2">配電盤の修理</h3>
                    <p className="text-gray-500 text-sm">迅速かつ確実な配電盤の修理サービスを提供しています。</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="relative h-[200px] mb-4 rounded overflow-hidden">
                      <Image src="/placeholder.svg?height=200&width=300" alt="工事施工" fill className="object-cover" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">工事施工</h3>
                    <p className="text-gray-500 text-sm">安全を最優先に考えた確実な工事施工を行っています。</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="wiring" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-red-600">ユニット配線及びケーブル製作</h2>
                  <p className="text-gray-600 mb-4">
                    各種ユニット配線からケーブル製作まで、高品質な製品を提供しています。
                    お客様の要望に合わせたカスタム設計も可能です。
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Tool className="h-5 w-5 text-red-600 mr-2" />
                      <span>ユニット配線の設計・製作</span>
                    </li>
                    <li className="flex items-center">
                      <Tool className="h-5 w-5 text-red-600 mr-2" />
                      <span>各種ケーブルの製作</span>
                    </li>
                    <li className="flex items-center">
                      <Tool className="h-5 w-5 text-red-600 mr-2" />
                      <span>品質管理の徹底</span>
                    </li>
                  </ul>
                </div>
                <div className="relative h-[300px] rounded-lg overflow-hidden">
                  <Image src="/placeholder.svg?height=300&width=500" alt="ユニット配線" fill className="object-cover" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="relative h-[200px] mb-4 rounded overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=200&width=300"
                        alt="ユニット配線"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="text-lg font-bold mb-2">ユニット配線</h3>
                    <p className="text-gray-500 text-sm">
                      様々な機器に対応したユニット配線の設計・製作を行っています。
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="relative h-[200px] mb-4 rounded overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=200&width=300"
                        alt="ケーブル製作"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="text-lg font-bold mb-2">ケーブル製作</h3>
                    <p className="text-gray-500 text-sm">高品質な各種ケーブルの製作を行っています。</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="equipment" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-red-600">各種製造機器の設計及び製造</h2>
                  <p className="text-gray-600 mb-4">
                    お客様のニーズに合わせた各種製造機器の設計から製造まで一貫して対応いたします。
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Settings className="h-5 w-5 text-red-600 mr-2" />
                      <span>製造機器の設計</span>
                    </li>
                    <li className="flex items-center">
                      <Settings className="h-5 w-5 text-red-600 mr-2" />
                      <span>高精度な製造</span>
                    </li>
                    <li className="flex items-center">
                      <Settings className="h-5 w-5 text-red-600 mr-2" />
                      <span>アフターサポート</span>
                    </li>
                  </ul>
                </div>
                <div className="relative h-[300px] rounded-lg overflow-hidden">
                  <Image src="/placeholder.svg?height=300&width=500" alt="製造機器" fill className="object-cover" />
                </div>
              </div>
            </TabsContent>
            <TabsContent value="electrical" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-red-600">電気設備工事・通信設備工事</h2>
                  <p className="text-gray-600 mb-4">安全で信頼性の高い電気設備工事と通信設備工事を提供しています。</p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Shield className="h-5 w-5 text-red-600 mr-2" />
                      <span>電気設備工事</span>
                    </li>
                    <li className="flex items-center">
                      <Shield className="h-5 w-5 text-red-600 mr-2" />
                      <span>通信設備工事</span>
                    </li>
                    <li className="flex items-center">
                      <Shield className="h-5 w-5 text-red-600 mr-2" />
                      <span>安全管理の徹底</span>
                    </li>
                  </ul>
                </div>
                <div className="relative h-[300px] rounded-lg overflow-hidden">
                  <Image src="/placeholder.svg?height=300&width=500" alt="電気設備工事" fill className="object-cover" />
                </div>
              </div>
            </TabsContent>
            <TabsContent value="maintenance" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-red-600">各種製造機器、公害監視計の保守、管理</h2>
                  <p className="text-gray-600 mb-4">
                    各種製造機器や公害監視計の保守・管理を行い、長期的な安定稼働をサポートします。
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Users className="h-5 w-5 text-red-600 mr-2" />
                      <span>定期的な保守点検</span>
                    </li>
                    <li className="flex items-center">
                      <Users className="h-5 w-5 text-red-600 mr-2" />
                      <span>緊急時の迅速対応</span>
                    </li>
                    <li className="flex items-center">
                      <Users className="h-5 w-5 text-red-600 mr-2" />
                      <span>長期的な管理サポート</span>
                    </li>
                  </ul>
                </div>
                <div className="relative h-[300px] rounded-lg overflow-hidden">
                  <Image src="/placeholder.svg?height=300&width=500" alt="保守管理" fill className="object-cover" />
                </div>
              </div>
            </TabsContent>
            <TabsContent value="asbestos" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-red-600">建築物、工作物 石綿含有事前調査</h2>
                  <p className="text-gray-600 mb-4">
                    建築物や工作物の石綿含有に関する事前調査を行い、安全な環境づくりをサポートします。
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <FileSearch className="h-5 w-5 text-red-600 mr-2" />
                      <span>専門的な石綿調査</span>
                    </li>
                    <li className="flex items-center">
                      <FileSearch className="h-5 w-5 text-red-600 mr-2" />
                      <span>詳細な報告書作成</span>
                    </li>
                    <li className="flex items-center">
                      <FileSearch className="h-5 w-5 text-red-600 mr-2" />
                      <span>対策提案</span>
                    </li>
                  </ul>
                </div>
                <div className="relative h-[300px] rounded-lg overflow-hidden">
                  <Image src="/placeholder.svg?height=300&width=500" alt="石綿調査" fill className="object-cover" />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </>
  )
}
