import { services } from '@/data/services';
import ServiceCard from './components/ServiceCard';

export default function ServicesPage() {
  return (
    <div className="w-full">
      <h2 className="text-3xl font-bold mb-10 text-center text-red-600">Our Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </div>
  );
}
