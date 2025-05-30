"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  Construction,
  Home,
  Wrench,
  ParkingSquare,
  ShieldCheck,
  Layers,
  Combine, // For Asphalt Milling
  Dribbble, // For Sports Court
  Waypoints, // For Road Paving
  PaintRoller, // For Sealcoating
  Droplets, // For Crack Sealing
  HardHat, // For Site Preparation
  Icon as LucideIcon,
} from "lucide-react";
import type { LucideProps } from 'lucide-react';
import type React from 'react';

interface Service {
  id: number;
  title: string;
  icon: React.FC<LucideProps>; // More specific type for Lucide icons
  imageSrc: string;
  learnMoreLink: string;
}

const servicesData: Service[] = [
  { id: 1, title: "Asphalt Paving", icon: Construction, imageSrc: "/homeHero.webp", learnMoreLink: "#" },
  { id: 2, title: "Driveway Paving", icon: Home, imageSrc: "/homeHero.webp", learnMoreLink: "#" },
  { id: 3, title: "Driveway Repair", icon: Wrench, imageSrc: "/homeHero.webp", learnMoreLink: "#" },
  { id: 4, title: "Parking Lot Paving", icon: ParkingSquare, imageSrc: "/homeHero.webp", learnMoreLink: "#" },
  { id: 5, title: "Parking Lot Maintenance", icon: ShieldCheck, imageSrc: "/homeHero.webp", learnMoreLink: "#" },
  { id: 6, title: "Asphalt Resurfacing", icon: Layers, imageSrc: "/homeHero.webp", learnMoreLink: "#" },
  { id: 7, title: "Asphalt Milling", icon: Combine, imageSrc: "/homeHero.webp", learnMoreLink: "#" },
  { id: 8, title: "Sports Court Paving", icon: Dribbble, imageSrc: "/homeHero.webp", learnMoreLink: "#" },
  { id: 9, title: "Road Paving", icon: Waypoints, imageSrc: "/homeHero.webp", learnMoreLink: "#" },
  { id: 10, title: "Sealcoating", icon: PaintRoller, imageSrc: "/homeHero.webp", learnMoreLink: "#" },
  { id: 11, title: "Crack Sealing & Filling", icon: Droplets, imageSrc: "/homeHero.webp", learnMoreLink: "#" },
  { id: 12, title: "Site Preparation & Base Work", icon: HardHat, imageSrc: "/homeHero.webp", learnMoreLink: "#" },
];

const ITEMS_TO_DISPLAY = 4; // Number of items visible at a time
const SCROLL_BY = 1; // Number of items to scroll by

const ServicesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // Index of the first visible item

  const numServices = servicesData.length;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + SCROLL_BY) % numServices);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - SCROLL_BY + numServices) % numServices);
  };

  const getDisplayedServices = () => {
    const displayed: Service[] = [];
    for (let i = 0; i < ITEMS_TO_DISPLAY; i++) {
      displayed.push(servicesData[(currentIndex + i) % numServices]);
    }
    return displayed;
  };

  const currentServices = getDisplayedServices();


  return (
    <section className="py-16 md:py-24 bg-gray-50 text-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary">
            Our Comprehensive Paving Services
          </h2>
          <p className="mt-4 text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
            From new installations to repairs and maintenance, we provide complete
            asphalt solutions for residential and commercial properties.
          </p>
        </div>

        <div className="relative">
          {/* Carousel Items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {currentServices.map((service) => (
              <div
                key={service.id}
                className="relative rounded-lg shadow-lg overflow-hidden group flex flex-col h-[300px]" // Added fixed height for consistency
              >
                <Image
                  src={service.imageSrc}
                  alt={service.title}
                  fill
                  style={{ objectFit: "cover" }}
                  // Removed group-hover:scale-105
                />
                {/* Overlay for content, ensuring text readability */}
                <div className="absolute inset-0 bg-black/60 p-4 sm:p-6 flex flex-col items-center justify-end text-center text-white"> {/* Changed justify-between to justify-end */}
                  {/* Group icon and title, and push them down with a spacer or by adjusting flex properties */}
                  <div className="flex-grow"></div> {/* Spacer div to push content down */}
                  <service.icon className="w-12 h-12 sm:w-16 sm:h-16 text-white mb-2 sm:mb-3" />
                  {/* Title container with fixed height for 2 lines */}
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 h-12 sm:h-14 leading-tight flex items-center justify-center">
                    {service.title}
                  </h3>
                  {/* Learn More button is already at the bottom due to justify-end and its own container */}
                  <div>
                    <Link href={service.learnMoreLink} passHref legacyBehavior>
                      <Button
                        variant="link"
                        className="text-yellow-400 hover:text-yellow-300 font-semibold text-sm sm:text-base"
                      >
                        Learn More &rarr;
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          {numServices > ITEMS_TO_DISPLAY && (
            <>
              <Button
                variant="outline"
                size="icon"
                className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-6 z-10 bg-white hover:bg-gray-100 text-blue-800 rounded-full shadow-md w-10 h-10 md:w-12 md:h-12"
                onClick={prevSlide}
                aria-label="Previous service"
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-6 z-10 bg-white hover:bg-gray-100 text-blue-800 rounded-full shadow-md w-10 h-10 md:w-12 md:h-12"
                onClick={nextSlide}
                aria-label="Next service"
              >
                <ChevronRight className="w-6 h-6" />
              </Button>
            </>
          )}
        </div>

        <div className="text-center mt-12 md:mt-16">
          <Link href="/services" passHref legacyBehavior>
            <Button
              size="lg"
              className="bg-primary hover:bg-yellow-400 hover:text-[#151515] text-white font-semibold px-8 py-3 text-base"
            >
              View All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;