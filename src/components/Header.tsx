"use client"; // Add "use client" for hooks
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  // navigationMenuTriggerStyle, // No longer using the default trigger style directly for custom hover
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
  SheetFooter,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import React from 'react';
import { useModal } from "@/contexts/ModalContext"; // Import useModal

// Reusable ListItem component for NavigationMenu
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a // This 'a' tag is the 'group'
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-colors text-white group", // Added 'group'
            "hover:bg-transparent focus:bg-transparent", // Ensure no background on hover/focus
            className
          )}
          {...props}
        >
          {/* Title turns yellow on parent 'a' hover */}
          <div className="text-sm font-medium leading-none group-hover:text-yellow-400 transition-colors">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-slate-300 group-hover:text-slate-200 transition-colors">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";


const servicesItems: { title: string; href: string; description: string }[] = [
  {
    title: "Asphalt Paving",
    href: "/services/asphalt-paving",
    description: "Comprehensive asphalt paving for new constructions and overlays.",
  },
  {
    title: "Driveway Paving",
    href: "/services/driveway-paving",
    description: "Durable and aesthetically pleasing driveway solutions.",
  },
  {
    title: "Parking Lot Paving",
    href: "/services/parking-lot-paving",
    description: "Scalable paving services for commercial parking lots.",
  },
  {
    title: "Sealcoating",
    href: "/services/sealcoating",
    description: "Protective sealcoating to extend the life of your asphalt.",
  },
  {
    title: "Asphalt Repair",
    href: "/services/asphalt-repair",
    description: "Pot hole repairs, crack filling, and other maintenance.",
  },
];

const serviceAreasItems: { title: string; href: string; description: string }[] = [
    { title: "Vancouver", href: "/service-areas/vancouver", description: "Serving all areas within Vancouver." },
    { title: "Burnaby", href: "/service-areas/burnaby", description: "Covering Burnaby and surrounding regions." },
    { title: "Richmond", href: "/service-areas/richmond", description: "Paving services available in Richmond." },
    { title: "Surrey", href: "/service-areas/surrey", description: "Extending our services to Surrey." },
    { title: "Coquitlam", href: "/service-areas/coquitlam", description: "Expert paving in Coquitlam." },
];

const industriesItems: { title: string; href: string; description: string }[] = [
    { title: "Residential", href: "/industries/residential", description: "Paving for homes and private properties." },
    { title: "Commercial", href: "/industries/commercial", description: "Solutions for businesses and commercial sites." },
    { title: "Municipal", href: "/industries/municipal", description: "Public works and municipal paving projects." },
    { title: "Industrial", href: "/industries/industrial", description: "Heavy-duty paving for industrial applications." },
];


const Header = () => {
  const { openEstimateModal } = useModal(); // Use the modal context

  const navLinkStyle = "group bg-transparent text-white rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-yellow-400 focus:text-yellow-400 focus:outline-none data-[active]:text-yellow-400 data-[state=open]:text-yellow-400";

  return (
    <header className="bg-primary text-white px-4 py-6 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/empireLogo.svg" alt="Empire Asphalt Paving Logo" width={50} height={50} />
          <div>
            <h1 className="text-xl font-bold">Empire Asphalt Paving</h1>
            <p className="text-xs">Lower Mainland BC</p>
          </div>
        </Link>

        {/* Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" passHref>
                <NavigationMenuLink className={navLinkStyle}>
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className={navLinkStyle}>Services</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-slate-900/95 backdrop-blur-sm rounded-xl shadow-2xl border border-slate-700/50">
                  {servicesItems.map((item) => (
                    <ListItem
                      key={item.title}
                      title={item.title}
                      href={item.href}
                    >
                      {item.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className={navLinkStyle}>Service Areas</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-slate-900/95 backdrop-blur-sm rounded-xl shadow-2xl border border-slate-700/50">
                  {serviceAreasItems.map((item) => (
                    <ListItem
                      key={item.title}
                      title={item.title}
                      href={item.href}
                    >
                      {item.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className={navLinkStyle}>Industries</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-slate-900/95 backdrop-blur-sm rounded-xl shadow-2xl border border-slate-700/50">
                  {industriesItems.map((item) => (
                    <ListItem
                      key={item.title}
                      title={item.title}
                      href={item.href}
                    >
                      {item.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/about" passHref>
                <NavigationMenuLink className={navLinkStyle}>
                  About
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/portfolio" passHref>
                <NavigationMenuLink className={navLinkStyle}>
                  Portfolio
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/contact" passHref>
                <NavigationMenuLink className={navLinkStyle}>
                  Contact
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Contact Info & CTA */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost-yellow" className="font-semibold" onClick={openEstimateModal}>
            Free Estimate
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost-yellow" size="icon" className="text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-[#1E3A8A] text-white border-slate-700 w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle className="text-yellow-400 text-2xl">Navigation</SheetTitle>
                <SheetDescription className="text-slate-300">
                  Select a page to navigate to.
                </SheetDescription>
              </SheetHeader>
              <nav className="flex flex-col space-y-3 mt-6">
                <SheetClose asChild>
                  <Link href="/" className="text-lg hover:text-yellow-400 py-2 border-b border-slate-700">Home</Link>
                </SheetClose>
                {/* Mobile Services (can be simple links or an Accordion for sub-items) */}
                <SheetClose asChild>
                  <Link href="/services" className="text-lg hover:text-yellow-400 py-2 border-b border-slate-700">Services</Link>
                </SheetClose>
                 {/* Example: Simple links for services in mobile */}
                {servicesItems.map(item => (
                  <SheetClose asChild key={`mob-${item.href}`}>
                    <Link
                      href={item.href}
                      className="text-sm hover:text-yellow-400 py-1 pl-4 text-slate-300"
>{item.title}</Link>
                  </SheetClose>
                ))}

                <SheetClose asChild>
                  <Link href="/service-areas" className="text-lg hover:text-yellow-400 py-2 border-b border-slate-700">Service Areas</Link>
                </SheetClose>
                {serviceAreasItems.map(item => (
                  <SheetClose asChild key={`mob-${item.href}`}>
                    <Link
                      href={item.href}
                      className="text-sm hover:text-yellow-400 py-1 pl-4 text-slate-300"
>{item.title}</Link>
                  </SheetClose>
                ))}

                <SheetClose asChild>
                  <Link href="/industries" className="text-lg hover:text-yellow-400 py-2 border-b border-slate-700">Industries</Link>
                </SheetClose>
                 {industriesItems.map(item => (
                  <SheetClose asChild key={`mob-${item.href}`}>
                    <Link
                      href={item.href}
                      className="text-sm hover:text-yellow-400 py-1 pl-4 text-slate-300"
>{item.title}</Link>
                  </SheetClose>
                ))}

                <SheetClose asChild>
                  <Link href="/about" className="text-lg hover:text-yellow-400 py-2 border-b border-slate-700">About</Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link href="/portfolio" className="text-lg hover:text-yellow-400 py-2 border-b border-slate-700">Portfolio</Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link href="/contact" className="text-lg hover:text-yellow-400 py-2">Contact</Link>
                </SheetClose>
              </nav>
              <SheetFooter className="mt-8">
                <SheetClose asChild>
                  {/* Update this button to open the modal */}
                  <Button variant="ghost-yellow" className="font-semibold w-full" onClick={openEstimateModal}>
                    Free Estimate
                  </Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;