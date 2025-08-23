interface BlackCardAtomProps {
  line1: string;
  line2: string;
  line3: string;
  chatIconSrc: string;
}

export default function BlackCardAtom({
  line1,
  line2,
  line3,
}: BlackCardAtomProps) {
  return (
    <div className="flex items-end w-full mt-6 relative">
      {/* Black Card */}
      <div className="bg-black text-white h-60 p-6 flex-1 flex flex-col justify-center ">
        <p className="text-[16px] md:text-[24px] mb-2 font-bold">{line1}</p>
        <p className="text-[16px] md:text-[24px] mb-2 font-bold">{line2}</p>
        <p className="text-[16px] md:text-[12px]">{line3}</p>
      </div>
    </div>
  );
}
