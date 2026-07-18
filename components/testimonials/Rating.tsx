import { Star } from "lucide-react";

interface RatingProps {
  rating: number;
}

export default function Rating({ rating }: RatingProps) {
  return (
    <div className="flex items-center justify-center gap-1">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          size={18}
          className={`${
            index < rating
              ? "fill-[#F59E0B] text-[#F59E0B]"
              : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );
}