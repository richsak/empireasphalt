"use client"; // Add "use client" for hooks
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useModal } from "@/contexts/ModalContext"; // Import useModal

const Footer = () => {
  const { openEstimateModal } = useModal(); // Use the modal context

  return (
    <footer className="bg-[#0F172A] text-slate-300 py-12 px-4 sm:px-6 lg:px-8"> {/* Approximate dark navy */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Company Info */}
        <div className="space-y-4">
          <Link href="/" className="flex items-center space-x-2" legacyBehavior>
            <Image src="/empireLogo.svg" alt="Empire Asphalt Paving Logo" width={40} height={40} />
            <div>
              <h3 className="text-lg font-semibold text-white">Empire Asphalt Paving</h3>
              <p className="text-sm">Lower Mainland BC</p>
            </div>
          </Link>
          <p className="text-sm">
            Professional asphalt paving services with 30+ years of experience serving the Lower Mainland.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-md font-semibold text-white mb-4">Navigation</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-yellow-400">Home</Link></li>
            <li><Link href="/services" className="hover:text-yellow-400">Services</Link></li>
            <li><Link href="/service-areas" className="hover:text-yellow-400">Service Areas</Link></li>
            <li><Link href="/industries" className="hover:text-yellow-400">Industries</Link></li>
            <li><Link href="/about" className="hover:text-yellow-400">About</Link></li>
            <li><Link href="/portfolio" className="hover:text-yellow-400">Portfolio</Link></li>
            <li><Link href="/contact" className="hover:text-yellow-400">Contact</Link></li>
          </ul>
        </div>

        {/* Our Services */}
        <div>
          <h4 className="text-md font-semibold text-white mb-4">Our Services</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/services/asphalt-paving" className="hover:text-yellow-400">Asphalt Paving</Link></li>
            <li><Link href="/services/driveway-paving" className="hover:text-yellow-400">Driveway Paving</Link></li>
            <li><Link href="/services/parking-lot-paving" className="hover:text-yellow-400">Parking Lot Paving</Link></li>
            <li><Link href="/services/sealcoating" className="hover:text-yellow-400">Sealcoating</Link></li>
            <li><Link href="/services/asphalt-repair" className="hover:text-yellow-400">Asphalt Repair</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-md font-semibold text-white mb-4">Contact Info</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center space-x-2">
              {/* Placeholder for Phone Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              <a href="tel:6045557283" className="hover:text-yellow-400">(604) 555-PAVE</a>
            </li>
            <li className="flex items-center space-x-2">
              {/* Placeholder for Email Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              <a href="mailto:info@empireasphalt.ca" className="hover:text-yellow-400">info@empireasphalt.ca</a>
            </li>
            <li className="flex items-center space-x-2">
              {/* Placeholder for Location Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              <span>Lower Mainland, BC</span>
            </li>
          </ul>
          <Button variant="ghost-yellow" className="font-semibold mt-6 w-full" onClick={openEstimateModal}>
            Free Estimate
          </Button>
        </div>
      </div>
      {/* Copyright */}
      <div className="mt-12 border-t border-slate-700 pt-8 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Empire Asphalt Paving. All rights reserved. | Licensed & Insured</p>
      </div>
    </footer>
  );
};

export default Footer;