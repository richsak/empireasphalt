import React from 'react';
import { Button } from '@/components/ui/button';

const QualityWorkSection: React.FC = () => {
  // Placeholder data for gallery items
  const galleryItems = Array(6).fill(null);

  return (
    <section className="py-12 md:py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">
            See Our Quality Work
          </h2>
          <p className="text-lg text-slate-700 max-w-2xl mx-auto">
            Browse our portfolio of completed paving projects across the Lower Mainland
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-10 md:mb-16">
          {galleryItems.map((_, index) => (
            <div
              key={index}
              className="aspect-video bg-slate-300 rounded-lg shadow-md overflow-hidden group"
            >
              {/* Placeholder for an image. You can replace this with an <Image> component */}
              <div className="w-full h-full flex items-center justify-center text-slate-500 group-hover:scale-105 transition-transform duration-300">
                {/* Example of how you might add an image later: */}
                {/* <Image src={`/portfolio/image-${index + 1}.jpg`} alt={`Portfolio item ${index + 1}`} layout="fill" objectFit="cover" /> */}
                <span className="text-sm">Project Image {index + 1}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-yellow-400 hover:text-black">
            View Full Portfolio
          </Button>
        </div>
      </div>
    </section>
  );
};

export default QualityWorkSection;