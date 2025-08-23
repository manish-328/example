// src/pages/Homepage.tsx
import Navbar from "../shared/components/organisms/Navbar";
import CarouselSection from "../shared/components/organisms/CarouselSection";
import ProductCardsSection from "../shared/components/organisms/ProductCardsSection";
import BlackCardSection from "../shared/components/organisms/BlackCardSection";

export default function Homepage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div
        className="
          relative w-full 
          h-[400px] sm:h-[600px]   /* smaller height on mobile */
          bg-cover bg-center mt-16
        "
        style={{
          backgroundImage: `url(${
            import.meta.env.BASE_URL
          }assets/0007dd85a48a15ca98317658340291aa526e681c.jpg)`,
        }}
      >
        {/* Fade overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80" />

        {/* Hero text */}
        <div
          className="
            absolute inset-0 
            flex items-center 
            justify-center sm:justify-end   /* center on mobile, right on desktop */
            px-6 sm:pr-28                   /* padding smaller on mobile */
            text-center sm:text-left
          "
        >
          <h1 className="font-orbitron text-xl sm:text-3xl font-semibold text-white max-w-md">
            Performance-Ready <br /> Apparel for Work & Beyond
          </h1>
        </div>

        {/* Slider Line */}
        <div className="absolute bottom-6 w-full flex justify-center">
          <div className="w-28 sm:w-40 h-1 bg-gray-300 relative">
            <div className="absolute left-0 top-0 h-1 bg-yellow-500 w-1/4"></div>
          </div>
        </div>

        {/* Bottom Black Bar */}
        <div className="absolute bottom-0 left-0 w-full h-6 sm:h-8 bg-black" />
      </div>

      {/* Sections */}
      <CarouselSection />
      <ProductCardsSection />
      <ProductCardsSection />
      <BlackCardSection />
    </div>
  );
}
