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
            <p className="mt-10">(工場)</p>
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
           
                  <div className="w-full  bg-gray-100 rounded-md flex items-center justify-center">
                        <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6628.199029496838!2d130.8623307764477!3d33.83554417323934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3543c6db00cd394f%3A0x4edffa16866d8b3f!2z44CSODAyLTA5Nzkg56aP5bKh55yM5YyX5Lmd5bee5biC5bCP5YCJ5Y2X5Yy65b6z5Yqb5paw55S677yS5LiB55uu77yR77yY4oiS77yS77yTIOW3neWOn-WAieW6q-S6i-WLmeaJgA!5e0!3m2!1sja!2sjp!4v1744484827067!5m2!1sja!2sjp"
                        width="100%"
                        height="500"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                  </div> <p className="text-sm text-gray-500">北九州モノレール 守恒駅 から 徒歩15分</p>
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
