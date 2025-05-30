import { MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const locations = [
  { name: 'Abbotsford' },
  { name: 'Burnaby' },
  { name: 'Chilliwack' },
  { name: 'Coquitlam' },
  { name: 'Delta' },
  { name: 'Langley' },
  { name: 'Maple Ridge' },
  { name: 'Mission' },
  { name: 'New Westminster' },
  { name: 'Pitt Meadows' },
  { name: 'Port Coquitlam' },
  { name: 'Richmond' },
  { name: 'Surrey' },
  { name: 'Vancouver' },
  { name: 'White Rock' },
];

const ServiceAreasSection = () => {
  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-4">
          Proudly Serving the Lower Mainland
        </h2>
        <p className="text-lg text-center text-gray-600 mb-10 md:mb-12 max-w-2xl mx-auto">
          Professional asphalt paving services across the Lower Mainland
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5 gap-6">
          {/* Removed mb-12 from here to ensure section padding is the primary bottom space if no button */}
          {locations.map((location) => (
            <div
              key={location.name}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center"
            >
              <MapPin className="w-8 h-8 text-primary mb-3" />
              <span className="font-medium text-gray-700">{location.name}</span>
            </div>
          ))}
        </div>
        {/* Button section removed */}
      </div>
    </section>
  );
};

export default ServiceAreasSection;