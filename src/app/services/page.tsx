import { Card, CardContent } from "@/components/ui/card"
import { Cable, Drill ,CircuitBoard,PencilRuler,Wrench,BookKey,InspectionPanel,HousePlug } from "lucide-react"
import Mainservice from "./components/main"
import Image from "next/image"
import Simage01 from '@/public/images/image01.jpg'
import Simage02 from '@/public/images/image02.jpg'
import Simage03 from '@/public/images/image03.jpg'
import Simage04 from '@/public/images/image04.jpg'
import Simage05 from '@/public/images/image05.jpg'
import Simage06 from '@/public/images/image06.jpg'
import Simage07 from '@/public/images/image07.jpg'
import Simage08 from '@/public/images/image08.jpg'

export default function ServicePage() {
  return (
    <>
     <Mainservice />
     <div className="w-full ">
        <div className=" m-12">

      <h2 className="text-3xl font-bold mb-10 flex flex-col items-center text-red-600">Our service</h2>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {/* 1 */}
          <Card className="transition-all duration-300 hover:shadow-xl">
            <CardContent className="p-4 flex flex-col items-center text-center space-y-4">
              <Image
              src={Simage01}
                alt="配電盤"
                className="w-full h-80 object-cover rounded-xl hover:scale-105 transition-transform duration-300"
              />
              <CircuitBoard className="h-8 w-8 text-red-600" />
              <h3 className="text-lg font-bold">配電盤の製造、修理及び工事施工</h3>
              <p className="text-sm text-gray-500">Manufacturing, repair and installation of switchboards</p>
            </CardContent>
          </Card>

          {/* 2 */}
          <Card className="transition-all duration-300 hover:shadow-xl">
            <CardContent className="p-4 flex flex-col items-center text-center space-y-4">
            <Image
              src={Simage02}
                alt="ユニット"
                className="w-full h-80 object-cover rounded-xl hover:scale-105 transition-transform duration-300"
              />
              <Cable className="h-8 w-8 text-red-600" />
              <h3 className="text-lg font-bold">ユニット配線及びケーブル製作</h3>
              <p className="text-sm text-gray-500">Unit wiring and cable fabrication</p>
            </CardContent>
          </Card>

          {/* 3 */}
          <Card className="transition-all duration-300 hover:shadow-xl">
            <CardContent className="p-4 flex flex-col items-center text-center space-y-4">
            <Image
              src={Simage03}
                alt="製造機器設計"
                className="w-full h-80 object-cover rounded-xl hover:scale-105 transition-transform duration-300"
              />
              <PencilRuler className="h-8 w-8 text-red-600" />
              <h3 className="text-lg font-bold">各種製造機器の設計及び製造</h3>
              <p className="text-sm text-gray-500">Design and manufacturing of various equipment</p>
            </CardContent>
          </Card>

          {/* 4 */}
          <Card className="transition-all duration-300 hover:shadow-xl">
            <CardContent className="p-4 flex flex-col items-center text-center space-y-4">
            <Image
              src={Simage04}
                alt="電気工事"
                className="w-full h-80 object-cover rounded-xl hover:scale-105 transition-transform duration-300"
              />
              <Wrench className="h-8 w-8 text-red-600" />
              <h3 className="text-lg font-bold">電気設備工事</h3>
              <p className="text-sm text-gray-500">Electrical & communication installation</p>
            </CardContent>
          </Card>
          <Card className="transition-all duration-300 hover:shadow-xl">
            <CardContent className="p-4 flex flex-col items-center text-center space-y-4">
            <Image
              src={Simage05}
                alt="通信工事"
                className="w-full h-80 object-cover rounded-xl hover:scale-105 transition-transform duration-300"
              />
              <Drill className="h-8 w-8 text-red-600" />
              <h3 className="text-lg font-bold">通信設備工事</h3>
              <p className="text-sm text-gray-500">Electrical & communication installation</p>
            </CardContent>
          </Card>

          {/* 5 */}
          <Card className="transition-all duration-300 hover:shadow-xl">
            <CardContent className="p-4 flex flex-col items-center text-center space-y-4">
            <Image
              src={Simage06}
                alt="保守管理"
                className="w-full h-80 object-cover rounded-xl hover:scale-105 transition-transform duration-300"
              />
              <BookKey className="h-8 w-8 text-red-600" />
              <h3 className="text-lg font-bold">各種製造機器、公害監視計の保守、管理</h3>
              <p className="text-sm text-gray-500">Maintenance of equipment and monitoring systems</p>
            </CardContent>
          </Card>

          {/* 6 */}
          <Card className="transition-all duration-300 hover:shadow-xl">
            <CardContent className="p-4 flex flex-col items-center text-center space-y-4">
            <Image
              src={Simage07}
                alt="半導体"
                className="w-full h-80 object-cover rounded-xl hover:scale-105 transition-transform duration-300"
              />
              <InspectionPanel className="h-8 w-8 text-red-600" />
              <h3 className="text-lg font-bold">半導体関連の精密加工部品製作</h3>
              <p className="text-sm text-gray-500">Precision parts for semiconductors</p>
            </CardContent>
          </Card>

          {/* 7 */}
          <Card className="transition-all duration-300 hover:shadow-xl">
            <CardContent className="p-4 flex flex-col items-center text-center space-y-4">
            <Image
              src={Simage08}
                alt="建築物"
                className="w-full h-80 object-cover rounded-xl hover:scale-105 transition-transform duration-300"
              />
              <HousePlug className="h-8 w-8 text-red-600" />
              <h3 className="text-lg font-bold">建築物、工作物 石綿含有事前調査</h3>
              <p className="text-sm text-gray-500">Asbestos content survey for buildings</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
    </>
  )
}
