import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function FooterCTA() {
  return (
    <div className="mx-auto max-w-4xl text-center">
      {/* Small Text */}
      <p className="mb-4 text-lg text-gray-500">
        Are you ready?
      </p>

      {/* Heading */}
      <h2 className="text-4xl font-extrabold text-black md:text-6xl">
        Get Your Insurance Now!
      </h2>

      {/* Button */}
      <div className="mt-10">
       <Link
  href="/contact"
  className="group inline-flex items-center gap-4 rounded-xl bg-[#B54426] px-12 py-5 text-lg font-semibold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-[#99381E] hover:shadow-2xl"
>
  Buy Now

  <ArrowUpRight
    size={22}
    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
  />
</Link>
      </div>
    </div>
  );
}