import { Card, CardContent } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import MainCompany from "./components/main"
import { Phone, MapPin } from "lucide-react"


export default function CompanyPage() {
  return (
    <div className="w-full">
      <MainCompany/>
      <div className="w-full ">
      <div className=" m-12">
      <h2 className="text-3xl font-bold flex flex-col items-center text-red-600">About us</h2>

      <section className=" flex flex-col justify-center  items-center py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <Card className="mb-10">
            <CardContent className="p-6">
              <h2 className="text-3xl font-bold mb-6 text-red-600 border-b pb-2">会社概要</h2>
              <Table className="text-xl">
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium w-1/3">商号</TableCell>
                    <TableCell>有限会社　北九電機</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">所在地</TableCell>
                    <TableCell> <p>(本店)</p>
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
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">設立年月日</TableCell>
                    <TableCell>2000年5月11日</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">資本金</TableCell>
                    <TableCell>300万円</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">役員</TableCell>
                    <TableCell>代表取締役 阪本　隆志</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">主要取引銀行</TableCell>
                    <TableCell>福岡銀行　戸畑支店、福岡ひびき信用金庫　北方支店</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-3xl font-bold mb-6 text-red-600 border-b pb-2">主要取引先（敬称略）</h2>
              <Table className="text-xl">
                <TableHeader>
                  <TableRow>
                    <TableHead>企業名</TableHead>
                    
                  </TableRow>
                </TableHeader>
                <TableBody className="text-xl">
                  <TableRow>
                    <TableCell>・川重商事　　　　　　　　株式会社</TableCell>                   
                  </TableRow>
                  <TableRow>
                    <TableCell>・イマ・ライフ・ジャパン　株式会社</TableCell>                    
                  </TableRow>
                  <TableRow>
                    <TableCell>・日本ディクス　　　　　　株式会社</TableCell>                  
                  </TableRow>
                  <TableRow>
                    <TableCell>・桜木理化学機械　　　　　株式会社</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>・株式会社　ウェバートン</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>・株式会社　ピーエムティー</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>・株式会社　三松</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
    </div>
    </div>
  )
}
