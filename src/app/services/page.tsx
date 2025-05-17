import { services } from '@/data/services';
import ServiceCard from './components/ServiceCard';
import Mainservice from './components/main';
export default function ServicesPage() {
  return (
    <div className="w-full">
      <Mainservice/>
      <h2 className="mt-12 text-3xl font-bold mb-10 text-center text-red-600">Our Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </div>
  );
}
