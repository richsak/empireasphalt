import React from 'react';
import { Clock, ShieldCheck, Award, CircleDollarSign, CheckCircle } from 'lucide-react';

interface CardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const FeatureCard: React.FC<CardProps> = ({ icon: Icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 flex flex-col items-center text-center">
    <div className="mb-4 flex items-center justify-center w-16 h-16 rounded-full bg-[#FDBE21]">
      <Icon className="w-8 h-8 text-primary" />
    </div>
    <h3 className="text-xl font-semibold text-primary mb-2">{title}</h3>
    <p className="text-muted-foreground text-sm">{description}</p>
  </div>
);

interface BadgeProps {
  text: string;
}

const InfoBadge: React.FC<BadgeProps> = ({ text }) => (
  <div className="bg-primary text-primary-foreground text-xs font-semibold px-4 py-2 rounded-full inline-flex items-center">
    <CheckCircle className="w-4 h-4 mr-2" />
    {text}
  </div>
);

const WhyChooseUsSection: React.FC = () => {
  const features = [
    {
      icon: Clock,
      title: '30+ Years of Experience',
      description: 'Decades of expertise in asphalt paving and construction throughout the Lower Mainland.',
    },
    {
      icon: ShieldCheck,
      title: 'Licensed & Fully Insured',
      description: 'Complete licensing and comprehensive insurance coverage for your peace of mind.',
    },
    {
      icon: Award,
      title: 'Quality Materials & Workmanship',
      description: 'Premium materials and skilled craftsmanship ensuring long-lasting, durable results.',
    },
    {
      icon: CircleDollarSign,
      title: 'Cost-Effective Solutions',
      description: 'Competitive pricing and value-driven services that deliver exceptional results within budget.',
    },
  ];

  const badges = [
    'BBB Accredited',
    'WCB Covered',
    'Industry Certified',
  ];

  return (
    <section className="py-16 bg-white sm:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Why Choose Empire Asphalt Paving?
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            Your trusted partner for all asphalt paving needs in the Lower Mainland.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-12">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {badges.map((badgeText) => (
            <InfoBadge key={badgeText} text={badgeText} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
