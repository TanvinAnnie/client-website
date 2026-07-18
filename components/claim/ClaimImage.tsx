import Image from "next/image";

export default function ClaimImage() {
  return (
    <div className="relative flex items-center justify-center">
      {/* Background Circles */}
      <div className="absolute h-[320px] w-[320px] rounded-full bg-[#FDF4F1]" />

      <div className="absolute h-[260px] w-[260px] rounded-full bg-[#EFD8D2]" />

      {/* Family Image */}
      <Image
        src="/images/claim/image.png"
        alt="Happy Family"
        width={430}
        height={420}
        priority
        className="relative z-10 object-contain"
      />
    </div>
  );
}