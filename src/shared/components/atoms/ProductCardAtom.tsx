// src/shared/components/atoms/ProductCardAtom.tsx
interface ProductCardAtomProps {
  image: string;
}

export default function ProductCardAtom({ image }: ProductCardAtomProps) {
  return (
    <div
      className="relative overflow-hidden transition-all duration-500"
      style={{ width: "13rem", height: "22rem" }} // same as ImageCardAtom
    >
      {/* Image */}
      <img src={image} alt="Product" className="w-full h-3/4 object-cover" />

      {/* Static info below image */}
      <div className="p-3 flex flex-col gap-1 text-[10px] h-1/4 box-border">
        {/* Line 1 - 10 color dots */}
        <div className="flex gap-1">
          {Array.from({ length: 10 }).map((_, idx) => (
            <span key={idx} className="w-2 h-2 rounded-full bg-yellow-500" />
          ))}
        </div>

        {/* Line 2 - Product Name */}
        <p className="text-gray-900 font-bold truncate">
          상품명이 노출 됩니다. 상품명이 노출 됩니...
        </p>

        {/* Line 3 - Brand Name */}
        <p className="text-gray-500 truncate">{`{브랜드명} 그룹코드-색상명`}</p>

        {/* Line 4 - Warehouse & Price */}
        <div className="flex items-center gap-2 text-[10px]">
          <span className="border border-red-200 rounded px-1 py-[1px] inline-block text-[8px] bg-red-50">
            창고명 6자
          </span>
          <span className="text-[10px] text-black font-semibold">
            000,000원
          </span>
        </div>
      </div>
    </div>
  );
}
