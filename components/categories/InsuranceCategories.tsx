import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface Props {
  title: string;
  image: string;
  description: string;
}

export default function CategoryCard({
  title,
  image,
  description,
}: Props) {
  return (
    <div className="group relative overflow-hidden rounded-3xl bg-[#F9EFEC] px-8 pt-10 pb-16 text-center transition duration-300 hover:-translate-y-2 hover:shadow-xl">

      <Image
        src={image}
        alt={title}
        width={90}
        height={90}
        className="mx-auto mb-6"
      />

      <h3 className="text-2xl font-bold">{title}</h3>

      <p className="mt-4 text-[15px] leading-7 text-gray-600">
        {description}
      </p>

      <button className="absolute left-1/2 bottom-[-25px] flex h-[60px] w-[60px] -translate-x-1/2 items-center justify-center rounded-full bg-[#B64627] text-white transition group-hover:scale-110">
        <ArrowUpRight size={24} />
      </button>

    </div>
  );
}