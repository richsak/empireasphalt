import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';
import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  keyFeatures: string[];
  imageUrl: string;
  icon: React.ElementType;
  learnMoreLink: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  keyFeatures,
  imageUrl,
  icon: IconComponent,
  learnMoreLink,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full">
      <div className="relative w-full h-56 md:h-64">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <div className="bg-blue-600/80 rounded-full p-5">
            <IconComponent className="w-10 h-10 text-white" />
          </div>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-semibold text-gray-800 mb-3">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <div className="mb-6">
          <h4 className="text-md font-semibold text-gray-700 mb-2">Key Features:</h4>
          <ul className="space-y-2 text-sm">
            {keyFeatures.map((feature, index) => (
              <li key={index} className="flex items-center text-gray-600">
                <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-auto">
          <Button asChild className="w-full bg-primary text-white hover:bg-accent hover:text-accent-foreground">
            <Link href={learnMoreLink}>Learn More</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;