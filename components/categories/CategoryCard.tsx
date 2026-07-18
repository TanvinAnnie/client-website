import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface CategoryCardProps {
  title: string;
  image: string;
  description: string;
}

export default function CategoryCard({
  title,
  image,
  description,
}: CategoryCardProps) {
  return (
    <div className="group relative rounded-[28px] bg-[#F9EFEC] px-8 pt-10 pb-16 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      {/* Icon */}
      <div className="flex justify-center">
        <Image
          src={image}
          alt={title}
          width={90}
          height={90}
          className="object-contain"
        />
      </div>

      {/* Title */}
      <h3 className="mt-6 text-[24px] font-bold uppercase text-black">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-4 text-[15px] leading-7 text-gray-600">
        {description}
      </p>

      {/* Arrow Button */}
      <button className="absolute left-1/2 bottom-[-28px] flex h-14 w-14 -translate-x-1/2 items-center justify-center rounded-full bg-[#B64627] text-white transition-all duration-300 group-hover:scale-110">
        <ArrowUpRight size={22} />
      </button>
    </div>
  );
}