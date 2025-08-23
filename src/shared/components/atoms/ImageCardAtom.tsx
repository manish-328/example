interface ImageCardAtomProps {
  image: string;
  title: string;
  subtitle?: string;
  isActive?: boolean;
}
export default function ImageCardAtom({
  image,
  title,
  subtitle,
  isActive = false,
}: ImageCardAtomProps) {
  if (isActive) {
    // Active card with special styling - only bottom-right corner rounded
    return (
      <div
        className="relative overflow-hidden transition-all duration-500 shadow-lg z-10 bg-white"
        style={{
          width: "18rem",
          height: "100%",
          borderBottomRightRadius: "50px",
        }}
      >
        {" "}
        {/* Image Container with Gradient Overlay */}{" "}
        <div className="relative h-full bg-gradient-to-b from-gray-100 to-gray-200">
          {" "}
          {/* Main Image */}{" "}
          <img src={image} alt={title} className="w-full h-full object-cover" />{" "}
          {/* Text Overlay at bottom */}{" "}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-white/100 to-transparent">
            {" "}
            <p className="text-black text-sm font-light mb-1 text-center">
              {" "}
              {subtitle || ""}{" "}
            </p>{" "}
            <h1 className="text-black text-lg font-bold text-center leading-tight">
              {" "}
              {title}{" "}
            </h1>{" "}
          </div>{" "}
        </div>{" "}
      </div>
    );
  }
  // Default inactive card

  return (
    <div
      className="relative overflow-hidden transition-all duration-500 scale-95 opacity-80"
      style={{ width: "12rem", height: "16rem" }}
    >
      {/* Image fills entire card */}
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover pt-14"
      />
      {/* Title on top-left */}
      <p className="absolute top-3 left-3 text-sm font-semibold text-gray-900 bg-white/60 px-2 py-1 rounded">
        {" "}
        {title}{" "}
      </p>
      {/* Optional subtitle at bottom (if needed) */}
      {subtitle && (
        <p className="absolute bottom-3 left-3 text-xs text-gray-700 bg-white/70 px-2 py-1 rounded">
          {" "}
          {subtitle}{" "}
        </p>
      )}{" "}
    </div>
  );
}
