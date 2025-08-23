// src/shared/components/molecules/ProductCardGrid.tsx
import ProductCardAtom from "../atoms/ProductCardAtom";

interface ProductCardGridProps {
  products: { image: string }[];
}

export default function ProductCardGrid({ products }: ProductCardGridProps) {
  return (
    <div className="flex flex-wrap justify-center gap-6">
      {products.map((product, idx) => (
        <ProductCardAtom key={idx} image={product.image} />
      ))}
    </div>
  );
}
