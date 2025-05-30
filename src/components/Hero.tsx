"use client"; // Add "use client" for hooks
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ShieldCheck, CalendarClock, Award } from 'lucide-react';
import { useModal } from "@/contexts/ModalContext"; // Import useModal
import { motion } from 'framer-motion'; // Import motion

const Hero = () => {
  const { openEstimateModal } = useModal(); // Use the modal context

  const fadeInStagger = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2, // Stagger delay
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="relative h-[calc(100vh-80px)] min-h-[600px] flex items-center justify-center text-white"> {/* Adjust height as needed, 80px is an example header height */}
      {/* Background Image */}
      <Image
        src="/homeHero.webp"
        alt="Asphalt paving work"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
        className="-z-10" // Ensure background is behind content
      />
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/65 -z-10" /> {/* Changed from bg-black/70 to bg-black/80 */}

      <div className="container mx-auto text-center z-10 px-4">
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-lg"
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeInStagger}
        >
          Empire Asphalt Paving
        </motion.h1>
        <motion.p 
          className="text-lg sm:text-xl md:text-2xl mb-8 max-w-4xl mx-auto drop-shadow-lg"
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeInStagger}
        >
          Professional paving solutions with 30+ years of experience. Quality workmanship, reliable service, and customer satisfaction guaranteed.
        </motion.p>
        <motion.div
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeInStagger}
        >
          <Button variant="ghost-yellow" className="font-semibold text-lg px-8 py-6 mb-10 shadow-xl" onClick={openEstimateModal}>
            Get Your Free Paving Estimate
          </Button>
        </motion.div>

        <motion.div 
          className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4"
          custom={3}
          initial="hidden"
          animate="visible"
          variants={fadeInStagger}
        >
          <div className="flex items-center bg-primary text-white px-4 py-2 rounded-full text-xs sm:text-sm space-x-2 shadow-md">
            <ShieldCheck size={16} />
            <span>Licensed & Insured</span>
          </div>
          <div className="flex items-center bg-primary text-white px-4 py-2 rounded-full text-xs sm:text-sm space-x-2 shadow-md">
            <CalendarClock size={16} />
            <span>30+ Years Experience</span>
          </div>
          <div className="flex items-center bg-primary text-white px-4 py-2 rounded-full text-xs sm:text-sm space-x-2 shadow-md">
            <Award size={16} />
            <span>BBB Accredited</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;