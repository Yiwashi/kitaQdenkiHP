import type { StaticImageData } from 'next/image'

import Simage01 from '@/public/images/image01.jpg'
import Simage02 from '@/public/images/image02.jpg'
import Simage03 from '@/public/images/image03.jpg'
import Simage04 from '@/public/images/image04.jpg'
import Simage05 from '@/public/images/image05.jpg'
import Simage06 from '@/public/images/image06.jpg'
import Simage07 from '@/public/images/image07.jpg'
import Simage08 from '@/public/images/image08.jpg'

export type Service = {
    title: string;
    icon: string;  // アイコンの名前を文字列として渡す
    mainImage: StaticImageData;
    description: string;
    images: StaticImageData[];
  };



  export const services = [
    {
      title: '配電盤の製造、修理及び工事施工',
      icon: 'CircuitBoard',
      mainImage: Simage01,
      description: 'Manufacturing, repair and installation of switchboards',
      images: [Simage01, Simage02],
    },
    {
      title: 'ユニット配線及びケーブル製作',
      icon: 'Cable',
      mainImage: Simage02,
      description: 'Unit wiring and cable fabrication',
      images: [Simage02],
    },
    {
      title: '各種製造機器の設計及び製造',
      icon:  'PencilRuler',
      mainImage: Simage03,
      description: 'Design and manufacturing of various equipment',
      images: [Simage03, Simage04],
    },
    {
      title: '電気設備工事',
      icon: 'Wrench',
      mainImage: Simage04,
      description: 'Electrical & communication installation',
      images: [Simage04],
    },
    {
      title: '通信設備工事',
      icon: 'Drill',
      mainImage: Simage05,
      description: 'Electrical & communication installation',
      images: [Simage05],
    },
    {
      title: '保守管理',
      icon: 'BookKey',
      mainImage: Simage06,
      description: 'Maintenance of equipment and monitoring systems',
      images: [Simage06],
    },
    {
      title: '半導体関連の精密加工部品製作',
      icon: 'InspectionPanel',
      mainImage: Simage07,
      description: 'Precision parts for semiconductors',
      images: [Simage07],
    },
    {
      title: '建築物、工作物 石綿含有事前調査',
      icon: 'HousePlug',
      mainImage: Simage08,
      description: 'Asbestos content survey for buildings',
      images: [Simage08],
    },
  ]