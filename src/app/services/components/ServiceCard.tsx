'use client';

import React, { useState } from 'react';
import { Service } from '@/data/services';
import Image from 'next/image';
import ServiceModal from './ServiceModal'; // ← ここを追加
import {
  Cable, Drill, CircuitBoard, PencilRuler, Wrench,
  BookKey, InspectionPanel, HousePlug
} from 'lucide-react';

type Props = {
  service: Service;
};

const iconComponents: { [key: string]: React.ComponentType<any> } = {
  CircuitBoard: CircuitBoard,
  Cable: Cable,
  Wrench: Wrench,
  PencilRuler: PencilRuler,
  Drill: Drill,
  BookKey: BookKey,
  InspectionPanel: InspectionPanel,
  HousePlug: HousePlug,
};

export default function ServiceCard({ service }: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const IconComponent = iconComponents[service.icon];

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="transition-all duration-300 hover:shadow-xl">
      <div className="p-6 flex flex-col items-center text-center space-y-4">
        <Image
          src={service.mainImage}
          alt={service.title}
          className="w-full h-80 object-cover rounded-xl hover:scale-105 transition-transform duration-300"
          onClick={openModal}
        />
        <h3 className="flex text-lg font-bold">
          {IconComponent && <IconComponent className="h-8 w-8 text-red-600 mr-5" />}
          {service.title}
        </h3>
        <p className="text-sm text-gray-500">{service.description}</p>
      </div>

      {/* ここで新しいServiceModalを使う */}
      <ServiceModal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={service.title}
        images={service.images}
        pdfs={service.Pdf} 
      />
    </div>
  );
}
