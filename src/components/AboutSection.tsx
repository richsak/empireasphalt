import { Button } from "./ui/button";

const AboutSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white text-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Left Column: Text Content */}
          <div className="space-y-7 pt-0">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary">
              About Empire Asphalt Paving
            </h2>
            <p className="text-gray-700 leading-relaxed text-base lg:text-lg">
              Founded over 30 years ago, Empire Asphalt Paving is a family-owned business
              dedicated to providing exceptional asphalt paving services throughout the
              Lower Mainland BC.
            </p>
            <p className="text-gray-700 leading-relaxed text-base lg:text-lg">
              Our commitment to quality workmanship, reliable service, and customer
              satisfaction has made us the trusted choice for thousands of residential and
              commercial clients across the region.
            </p>
            {/* Stats Section */}
            <div className="grid grid-cols-3 gap-x-4 gap-y-2 text-center pt-4 pb-2">
              <div>
                <p className="text-3xl lg:text-4xl font-bold text-primary">30+</p>
                <p className="text-sm text-gray-600 mt-1">Years in Business</p>
              </div>
              <div>
                <p className="text-3xl lg:text-4xl font-bold text-primary">5000+</p>
                <p className="text-sm text-gray-600 mt-1">Projects Completed</p>
              </div>
              <div>
                <p className="text-3xl lg:text-4xl font-bold text-primary">100%</p>
                <p className="text-sm text-gray-600 mt-1">Satisfaction Rate</p>
              </div>
            </div>
            <Button
              size="lg"
              className="bg-primary hover:bg-yellow-400 hover:text-[#151515] text-white font-semibold px-8 py-3 text-base"
            >
              Learn More About Us
            </Button>
          </div>

          {/* Right Column: Image Placeholder */}
          <div className="bg-gray-300 min-h-[20rem] sm:min-h-[24rem] rounded-lg flex items-center justify-center p-4 shadow-xl">
            <p className="text-gray-500 text-center text-lg">Empire Asphalt Paving team</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;