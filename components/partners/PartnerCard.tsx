import Image from "next/image";

interface PartnerCardProps {
  name: string;
  logo: string;
}

export default function PartnerCard({
  name,
  logo,
}: PartnerCardProps) {
  return (
    <div
      className="
        flex
        h-32
        items-center
        justify-center
        border-r
        border-b
        border-[#D9D9D9]
        bg-white
        transition-all
        duration-300
        hover:bg-gray-50
      "
    >
      <Image
        src={logo}
        alt={name}
        width={140}
        height={70}
        className="object-contain"
      />
    </div>
  );
}