"use client";
import React from 'react';
import ServiceCard from './ServiceCard';
import { HardHat, Home, Wrench, CheckCircle2, Phone, ParkingSquare, Settings2, Layers, ShieldCheck, Construction, Shovel, Truck, Dribbble, Milestone } from 'lucide-react'; // Added Phone for CTA and new service icons
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useModal } from '@/contexts/ModalContext';

const servicesData = [
  {
    title: 'Asphalt Paving',
    description:
      'Our comprehensive asphalt paving services include site preparation, proper base installation, and high-quality asphalt application. We use only premium materials and state-of-the-art equipment to ensure long-lasting, durable surfaces that can withstand heavy traffic and harsh weather conditions.',
    keyFeatures: [
      'Premium asphalt materials',
      'Professional site preparation',
      'Heavy-duty equipment',
      'Quality guarantee',
    ],
    imageUrl: '/homeHero.webp',
    icon: HardHat,
    learnMoreLink: '/services/asphalt-paving',
  },
  {
    title: 'Driveway Paving',
    description:
      "Transform your property with a beautiful, functional driveway that adds value to your home. Our residential driveway paving services include custom design, proper drainage solutions, and expert installation that complements your home's architecture while providing years of reliable service.",
    keyFeatures: [
      'Custom design options',
      'Proper drainage',
      'Curb appeal enhancement',
      'Increased property value',
    ],
    imageUrl: '/homeHero.webp',
    icon: Home,
    learnMoreLink: '/services/driveway-paving',
  },
  {
    title: 'Driveway Repair',
    description:
      "Don't let a damaged driveway detract from your property's appearance. Our repair services address cracks, potholes, and surface deterioration using proven techniques and quality materials to restore your driveway's functionality and appearance.",
    keyFeatures: [
      'Crack sealing',
      'Pothole repair',
      'Surface restoration',
      'Cost-effective solutions',
    ],
    imageUrl: '/homeHero.webp',
    icon: Wrench,
    learnMoreLink: '/services/driveway-repair',
  },
  {
    title: 'Parking Lot Paving',
    description:
      'Create a professional impression with a well-designed parking lot that meets all accessibility requirements and local regulations. Our commercial paving services include comprehensive planning, proper drainage systems, and professional line striping for maximum efficiency and safety.',
    keyFeatures: [
      'ADA compliance',
      'Professional striping',
      'Drainage systems',
      'Traffic flow optimization',
    ],
    imageUrl: '/homeHero.webp',
    icon: ParkingSquare,
    learnMoreLink: '/services/parking-lot-paving',
  },
  {
    title: 'Parking Lot Maintenance',
    description:
      'Protect your investment with regular parking lot maintenance that extends the life of your pavement. Our maintenance services include crack sealing, line striping, signage installation, and surface treatments that keep your parking lot looking professional and functioning properly.',
    keyFeatures: [
      'Line striping',
      'Signage installation',
      'Surface treatments',
      'Preventive maintenance',
    ],
    imageUrl: '/homeHero.webp',
    icon: Settings2,
    learnMoreLink: '/services/parking-lot-maintenance',
  },
  {
    title: 'Asphalt Resurfacing',
    description:
      "Give your existing asphalt a new lease on life with professional resurfacing. This cost-effective solution involves applying a new layer of asphalt over your existing surface, providing a smooth, attractive finish that can extend your pavement's life by many years.",
    keyFeatures: [
      'Cost-effective solution',
      'Extended pavement life',
      'Smooth finish',
      'Quick installation',
    ],
    imageUrl: '/homeHero.webp',
    icon: Layers,
    learnMoreLink: '/services/asphalt-resurfacing',
  },
  {
    title: 'Sealcoating',
    description:
      'Protect your asphalt investment with professional sealcoating that creates a barrier against water, UV rays, and chemicals. This preventive treatment not only extends the life of your pavement but also gives it a fresh, attractive appearance.',
    keyFeatures: [
      'UV protection',
      'Water resistance',
      'Enhanced appearance',
      'Extended pavement life',
    ],
    imageUrl: '/homeHero.webp',
    icon: ShieldCheck,
    learnMoreLink: '/services/sealcoating',
  },
  {
    title: 'Crack Sealing & Filling',
    description:
      "Don't let small cracks become big problems. Our crack sealing and filling services use high-quality materials and proven techniques to seal cracks and prevent water infiltration that can cause serious structural damage to your pavement.",
    keyFeatures: [
      'Water damage prevention',
      'Quality sealants',
      'Structural protection',
      'Cost-effective repair',
    ],
    imageUrl: '/homeHero.webp',
    icon: Construction,
    learnMoreLink: '/services/crack-sealing-filling',
  },
  {
    title: 'Site Preparation & Base Work',
    description:
      'A strong foundation is essential for long-lasting pavement. Our site preparation services include proper excavation, grading, and base installation using the right materials and techniques to ensure your new pavement will perform well for decades.',
    keyFeatures: [
      'Proper excavation',
      'Professional grading',
      'Quality base materials',
      'Long-term stability',
    ],
    imageUrl: '/homeHero.webp',
    icon: Shovel,
    learnMoreLink: '/services/site-preparation-base-work',
  },
  {
    title: 'Asphalt Milling',
    description:
      'Proper surface preparation is crucial for long-lasting results. Our milling services use specialized equipment to remove old, damaged asphalt to the precise depth required, creating the perfect foundation for new pavement installation.',
    keyFeatures: [
      'Precision milling',
      'Proper depth control',
      'Surface preparation',
      'Recycling options',
    ],
    imageUrl: '/homeHero.webp',
    icon: Truck,
    learnMoreLink: '/services/asphalt-milling',
  },
  {
    title: 'Sports Court Paving',
    description:
      'Create the perfect playing surface with our specialized sports court paving services. We understand the precise requirements for different sports and provide expert installation that meets official specifications for optimal performance and safety.',
    keyFeatures: [
      'Official specifications',
      'Precise leveling',
      'Sport-specific surfaces',
      'Safety compliance',
    ],
    imageUrl: '/homeHero.webp',
    icon: Dribbble,
    learnMoreLink: '/services/sports-court-paving',
  },
  {
    title: 'Road Paving',
    description:
      'From private access roads to municipal projects, our road paving services handle projects of all sizes. We use heavy-duty equipment and materials designed to withstand constant traffic and provide safe, smooth surfaces for years to come.',
    keyFeatures: [
      'Heavy-duty construction',
      'Traffic-rated materials',
      'Safety standards',
      'Municipal experience',
    ],
    imageUrl: '/homeHero.webp',
    icon: Milestone,
    learnMoreLink: '/services/road-paving',
  },
];

const CallToActionSection = () => {
  const { openEstimateModal } = useModal();
  return (
    <section className="py-16 md:py-24 bg-primary text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          Ready to Get Started?
        </h2>
        <p className="text-lg md:text-xl text-gray-300 mb-10 md:mb-12 max-w-2xl mx-auto">
          Contact us today for a free, no-obligation estimate on any of our professional paving services. We're here to help bring your project to life.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-8 md:space-x-10">
          <Button
            variant="ghost-yellow"
            size="lg"
            className="font-semibold px-10 py-6 text-lg md:text-xl"
            onClick={openEstimateModal}
          >
            Get Your Free Estimate
          </Button>
          <a
            href="tel:+16045557283"
            className="flex items-center text-lg md:text-xl font-semibold text-white hover:text-yellow-400 transition-colors"
          >
            <Phone className="w-6 h-6 mr-2" />
            (604) 555-PAVE
          </a>
        </div>
      </div>
    </section>
  );
};


const ServicesPageContent = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-[#0F172A] text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Professional Services
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            We offer a complete range of asphalt paving and maintenance services for residential, commercial, and municipal clients throughout the Lower Mainland.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 items-stretch">
            {servicesData.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                keyFeatures={service.keyFeatures}
                imageUrl={service.imageUrl}
                icon={service.icon}
                learnMoreLink={service.learnMoreLink}
              />
            ))}
          </div>
        </div>
      </section>
      <CallToActionSection />
    </div>
  );
};

export default ServicesPageContent;