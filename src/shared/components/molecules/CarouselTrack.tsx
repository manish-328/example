import ImageCardAtom from "../atoms/ImageCardAtom";

interface CarouselTrackProps {
  items: {
    image: string;
    title: string;
    subtitle?: string;
  }[];
}

export default function CarouselTrack({ items }: CarouselTrackProps) {
  return (
    <div className="flex items-end space-x-4 flex justify-center space-x-4 px-6">
      {items.map((item, idx) => (
        <div
          key={idx}
          className="flex-shrink-0 flex items-end"
          style={{ height: "20rem" }} // max card height
        >
          <ImageCardAtom
            image={item.image}
            title={item.title}
            subtitle={item.subtitle}
            isActive={idx === items.length - 1} // last one is active
          />
        </div>
      ))}
    </div>
  );
}
