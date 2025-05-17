import type { StaticImageData } from 'next/image'

//画像の読み込み
import Imge0101 from '@/public/01/01-01.jpg'
import Imge0102 from '@/public/01/01-02.jpg'
import Imge0103 from '@/public/01/01-03.jpg'
import Imge0104 from '@/public/01/01-04.jpg'
import Imge0105 from '@/public/01/01-05.jpg'
import Imge0106 from '@/public/01/01-06.jpg'

import Imge0201 from '@/public/02/02-01.jpg'
import Imge0202 from '@/public/02/02-02.jpg'
import Imge0203 from '@/public/02/02-03.jpg'
import Imge0204 from '@/public/02/02-04.jpg'
import Imge0205 from '@/public/02/02-05.jpg'
import Imge0206 from '@/public/02/02-06.jpg'

import Imge0301 from '@/public/03/03-01.jpg'
import Imge0302 from '@/public/03/03-02.jpg'
import Imge0303 from '@/public/03/03-03.jpg'
import Imge0304 from '@/public/03/03-04.jpg'
import Imge0305 from '@/public/03/03-05.jpg'
import Imge0306 from '@/public/03/03-06.jpg'

import Imge0401 from '@/public/04/04-01.jpg'
import Imge0402 from '@/public/04/04-02.jpg'
import Imge0403 from '@/public/04/04-03.jpg'
import Imge0404 from '@/public/04/04-04.jpg'
import Imge0405 from '@/public/04/04-05.jpg'
import Imge0406 from '@/public/04/04-06.jpg'

import Imge0501 from '@/public/05/05-01.jpg'
import Imge0502 from '@/public/05/05-02.jpg'
import Imge0503 from '@/public/05/05-03.jpg'
import Imge0504 from '@/public/05/05-04.jpg'
import Imge0505 from '@/public/05/05-05.jpg'
import Imge0506 from '@/public/05/05-06.jpg'

import Imge0601 from '@/public/06/06-01.jpg'
import Imge0602 from '@/public/06/06-02.jpg'
import Imge0603 from '@/public/06/06-03.jpg'


import Imge0701 from '@/public/07/07-01.jpg'
import Imge0702 from '@/public/07/07-02.jpg'
import Imge0703 from '@/public/07/07-03.jpg'
import Imge0704 from '@/public/07/07-04.jpg'

import Imge0801 from '@/public/08/08-01.jpg'
import Imge0802 from '@/public/08/08-02.jpg'
import Imge0803 from '@/public/08/08-03.jpg'
import Imge0804 from '@/public/08/08-04.jpg'


export type Service = {
    title: string;
    icon: string;  // アイコンの名前を文字列として渡す
    mainImage: StaticImageData;
    description: string;
    images: StaticImageData[];
    Pdf?: string[]; // PDFファイルのパス
  };



  export const services = [
    {
      title: '各種製造機器の設計、製造、保守',
      icon: 'CircuitBoard',
      mainImage: Imge0101,
      description: 'Design, manufacture and maintenance of various manufacturing equipment',
      images: [Imge0101, Imge0102,Imge0103, Imge0104,Imge0105, Imge0106],
    },
    {
      title: '制御盤、配電盤の設計、制作、施工、修理',
      icon: 'Cable',
      mainImage: Imge0201,
      description: 'Design, production, installation, and repair of control panels and switchboards',
      images: [Imge0201, Imge0202,Imge0203, Imge0204,Imge0205, Imge0206],
    },
    {
      title: 'ユニット配線及びケーブル製作',
      icon:  'PencilRuler',
      mainImage: Imge0301,
      description: 'Unit wiring and cable fabrication',
      images: [Imge0301, Imge0302,Imge0303, Imge0304,Imge0305, Imge0306],
    },
    {
      title: '電気設備の設計、施工',
      icon: 'Wrench',
      mainImage: Imge0401,
      description: 'Design and construction of electrical equipment',
      images: [Imge0401, Imge0402,Imge0403, Imge0404,Imge0405, Imge0406],
    },
    {
      title: '電気通信設備の設計、施工',
      icon: 'Drill',
      mainImage: Imge0501,
      description: 'Design and construction of telecommunications equipment',
      images: [Imge0501, Imge0502,Imge0503, Imge0504,Imge0505, Imge0506],
    },
    {
      title: '公害監視設備の設計、製造、保守',
      icon: 'BookKey',
      mainImage: Imge0601,
      description: 'Design, manufacture and maintenance of pollution monitoring equipment',
      images: [Imge0601, Imge0602,Imge0603],
    },
    {
      title: '半導体関連の精密加工部品製作',
      icon: 'InspectionPanel',
      mainImage: Imge0701,
      description: 'Manufacture of precision machined parts related to semiconductors',
      images: [Imge0701, Imge0702,Imge0703, Imge0704],
    },
    {
      title: '建築物、工作物　石綿含有事前調査、施工',
      icon: 'HousePlug',
      mainImage: Imge0803,
      description: 'Buildings and workplaces, including pre-inspection and construction.',
      images: [Imge0801, Imge0802,Imge0803, Imge0804],
      Pdf:["/pdf/01.pdf","/pdf/02.pdf"],
    },
  ]