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
        className="relative w-full h-[600px] bg-cover bg-center mt-16"
        // 👆 pushes hero image down by navbar height
        style={{
          backgroundImage:
            "url('/assets/0007dd85a48a15ca98317658340291aa526e681c.jpg')",
        }}
      >
        {/* Fade overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/100 via-transparent to-black/100" />

        {/* Hero text */}
        <div className="absolute inset-0 flex items-center justify-end pr-29 text-left">
          <h1 className="font-orbitron text-2xl md:text-3xl font-semibold text-white max-w-">
            Performance-Ready <br /> Apparel for Work & Beyond
          </h1>
        </div>

        {/* Slider Line */}
        <div className="absolute bottom-8 w-full flex justify-center">
          <div className="w-40 h-1 bg-gray-300 relative">
            {/* Yellow progress segment */}
            <div className="absolute left-0 top-0 h-1 bg-yellow-500 w-1/4"></div>
          </div>
        </div>

        {/* Bottom Black Bar */}
        <div className="absolute bottom-0 left-0 w-full h-8 bg-black" />
      </div>

      {/*carousel*/}
      <CarouselSection />

      <ProductCardsSection />
      <ProductCardsSection />

      <BlackCardSection />
    </div>
  );
}
