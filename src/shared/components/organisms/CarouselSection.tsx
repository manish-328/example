import { useState, useEffect } from "react";
import CarouselTrack from "../molecules/CarouselTrack";

const sampleItems = [
  {
    image: "/assets/carousel1.png",
    title: "계절에 구애받지 않고 \n편하게 입을 수 있는 아노락",
  },
  {
    image: "/assets/carousel2.png",
    title: "가볍고 뛰어난 보온성을\n자랑하는 방한조끼",
  },
  {
    image: "/assets/carousel3.png",
    title: "포근한 따뜻함이\n필요할 때 플리스",
  },
  {
    image: "/assets/carousel4.png",
    title: "쌀쌀한 바람이 부는\n가을에 입기 좋은 자켓",
  },
];

export default function CarouselSection() {
  const [items, setItems] = useState(sampleItems);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setItems((prev) => {
        const newItems = [...prev.slice(1), prev[0]];
        setCurrentIndex((prevIndex) => (prevIndex + 1) % sampleItems.length);
        return newItems;
      });
    }, 3000); // rotate every 3s

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative py-16 px-4">
      {/* Title aligned with carousel */}
      <h2 className="text-xl font-semibold mb-8 ml-39">
        스타일과 실용성을 모두 담은 시즌 셀렉션
      </h2>

      {/* Carousel */}
      <CarouselTrack items={items} />

      {/* Progress Bar */}
      <div className="mt-6 flex justify-center">
        <div className="w-40 h-1 bg-gray-300 flex overflow-hidden rounded">
          {sampleItems.map((_, idx) => (
            <div
              key={idx}
              className={`h-1 transition-all duration-500 ${
                idx === currentIndex
                  ? "bg-yellow-500 flex-[2]"
                  : "bg-gray-300 flex-1"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
