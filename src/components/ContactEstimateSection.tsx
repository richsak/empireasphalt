"use client";

import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useModal } from '@/contexts/ModalContext';

const ContactEstimateSection = () => {
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

export default ContactEstimateSection;