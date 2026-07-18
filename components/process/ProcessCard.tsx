import Image from "next/image";

interface ProcessCardProps {
  step: string;
  title: string;
  description: string;
  image: string;
}

export default function ProcessCard({
  step,
  title,
  description,
  image,
}: ProcessCardProps) {
  return (
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-[30px]
        border
        border-white/15
       bg-[#1D232B]/60
        p-10
        text-center
      backdrop-blur-xl
        transition-all
        duration-500
      hover:-translate-y-5 hover:scale-[1.02]
       hover:border-[#D96C2C]
hover:shadow-[0_20px_60px_rgba(217,108,44,.25)]
      "
    >
      {/* Circle Image */}

      <div className="mx-auto mb-8 h-40 w-40 overflow-hidden rounded-full border-4 border-white/20">
        <Image
          src={image}
          alt={title}
          width={160}
          height={160}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
        />
      </div>

      {/* Step Number */}

      <div className="mb-6 flex justify-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#D96C2C] text-lg font-bold text-white shadow-lg transition-all duration-300 group-hover:scale-110">
          {step}
        </div>
      </div>

      {/* Title */}

      <h3 className="mb-4 text-2xl font-semibold text-white">
        {title}
      </h3>

      {/* Description */}

      <p className="leading-8 text-gray-300">
        {description}
      </p>
    </div>
  );
}