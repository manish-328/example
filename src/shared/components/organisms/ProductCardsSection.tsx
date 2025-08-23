// src/shared/components/organisms/ProductCardsSection.tsx
import ProductCardGrid from "../molecules/ProductCardGrid";

const products = [
  {
    image: `${import.meta.env.BASE_URL}assets/carousel1.png`,
    title: "Product One",
  },
  {
    image: `${import.meta.env.BASE_URL}assets/carousel1.png`,
    title: "Product Two",
  },
  {
    image: `${import.meta.env.BASE_URL}assets/carousel1.png`,
    title: "Product Three",
  },
  {
    image: `${import.meta.env.BASE_URL}assets/carousel1.png`,
    title: "Product Four",
  },
];

export default function ProductCardsSection() {
  return (
    <section className="mt-12 px-6 md:px-16">
      <h2 className="text-xs font-semibold text-gray-900 mb-4 text-center">
        상품진열이 타이틀이 들어갑니다.
      </h2>
      <h4 className=" text-xs text-gray-900 mb-10 text-center">
        부타이틀이 필요할 경우 텍스트가 들어갑니다.
      </h4>
      <ProductCardGrid products={products} />
    </section>
  );
}
