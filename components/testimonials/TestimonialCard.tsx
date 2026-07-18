import Image from "next/image";
import Rating from "./Rating";
import ClientInfo from "./ClientInfo";

interface TestimonialCardProps {
  review: string;
  rating: number;
  image: string;
  name: string;
  designation: string;
  company: string;
}

export default function TestimonialCard({
  review,
  rating,
  image,
  name,
  designation,
  company,
}: TestimonialCardProps) {
  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-[32px]
        border
        border-white/15
        bg-white/10
        p-8
        shadow-2xl
        backdrop-blur-xl
        transition-all
        duration-500
        hover:-translate-y-2
      "
    >
      {/* Glass Shine */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent" />

      {/* Quote Icon */}
      <div className="mb-8 flex justify-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#D96C2C] shadow-lg">
          <Image
            src="/images/testimonials/quote.svg"
            alt="Quote"
            width={26}
            height={26}
          />
        </div>
      </div>

      {/* Review */}
      <p className="text-center text-lg leading-9 text-gray-200">
        "{review}"
      </p>

      {/* Rating */}
      <div className="mt-8">
        <Rating rating={rating} />
      </div>

      {/* Client */}
      <ClientInfo
        image={image}
        name={name}
        designation={designation}
        company={company}
      />
    </div>
  );
}