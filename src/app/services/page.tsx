import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ServicesPageContent from '@/components/ServicesPageContent';
import React from 'react';

export const metadata = {
  title: 'Our Services | Empire Asphalt Paving',
  description: 'Explore the professional asphalt paving and maintenance services offered by Empire Asphalt Paving in the Lower Mainland BC. From asphalt paving to driveway repair, we cover all your needs.',
};

const ServicesPage = () => {
  return (
    <>
      <Header />
      <main>
        <ServicesPageContent />
      </main>
      <Footer />
    </>
  );
};

export default ServicesPage;