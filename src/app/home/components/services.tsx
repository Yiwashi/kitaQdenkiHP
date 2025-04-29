import { Card, CardContent } from "@/components/ui/card"
import { Cable, CircuitBoard,PencilRuler,Wrench,BookKey,InspectionPanel,HousePlug,Drill } from "lucide-react"


export default function ServiceHome() {
  return (
      <div className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-red-600">
                Our Service
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                幅広い電気工事と製造サービスを提供しています。
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <Card className="service-card transition-all duration-300">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <CircuitBoard className="h-12 w-12 text-red-600" />
                <h3 className="text-xl font-bold">各種製造機器の設計、製造、保守</h3>
              </CardContent>
            </Card>
            <Card className="service-card transition-all duration-300">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <Cable className="h-12 w-12 text-red-600" />
                <h3 className="text-xl font-bold">制御盤、配電盤の設計、制作、施工、修理</h3>
              </CardContent>
            </Card>
            <Card className="service-card transition-all duration-300">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <PencilRuler className="h-12 w-12 text-red-600" />
                <h3 className="text-xl font-bold">ユニット配線及びケーブル製作</h3>
              </CardContent>
            </Card>
            <Card className="service-card transition-all duration-300">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <Wrench className="h-12 w-12 text-red-600" />
                <h3 className="text-xl font-bold">電気通信設備の設計、施工</h3>
              </CardContent>
            </Card>
            <Card className="service-card transition-all duration-300">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <Drill className="h-12 w-12 text-red-600" />
                <h3 className="text-xl font-bold">電気通信設備の設計、施工</h3>
              </CardContent>
            </Card>
            <Card className="service-card transition-all duration-300">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <BookKey className="h-12 w-12 text-red-600" />
                <h3 className="text-xl font-bold">公害監視設備の設計、製造、保守</h3>
              </CardContent>
            </Card>
            <Card className="service-card transition-all duration-300">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <InspectionPanel className="h-12 w-12 text-red-600" />
                <h3 className="text-xl font-bold">半導体関連の精密加工部品製作</h3>              </CardContent>
            </Card>
            <Card className="service-card transition-all duration-300">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <HousePlug className="h-12 w-12 text-red-600" />
                <h3 className="text-xl font-bold">建築物、工作物　石綿含有事前調査、施工</h3>
              </CardContent>
            </Card>
            
          </div>
        </div>    
    </div>
  )
}
