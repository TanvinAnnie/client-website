import { ArrowRight, Mail } from "lucide-react";

export default function ClaimCard() {
  return (
    <div className="w-full rounded-[28px] bg-[#FBF2EF] p-8 shadow-sm lg:p-12">
      {/* Small Heading */}
      <p className="mb-3 text-sm font-semibold uppercase tracking-[3px] text-[#E67817]">
        Be Happy To Get Insurance
      </p>

      {/* Main Title */}
      <h2 className="mb-6 text-3xl font-bold leading-tight text-[#111827] lg:text-5xl">
        Your Amazing Insurance Provider
      </h2>

      {/* Description */}
      <p className="mb-10 max-w-lg text-base leading-8 text-gray-600">
        There are many variations of passages of Lorem Ipsum available,
        but the majority have suffered alteration in some form by injected
        humour, or randomised words.
      </p>

      {/* Button */}
      <button className="flex items-center gap-3 rounded-full bg-[#E67817] px-8 py-4 font-semibold text-white transition hover:bg-[#cf650f]">
        Claim Coverage

        <ArrowRight size={20} />
      </button>

      {/* Divider */}
      <div className="my-10 flex items-center">
        <div className="h-px flex-1 bg-gray-300" />

        <span className="mx-4 text-sm font-semibold text-gray-500">
          OR
        </span>

        <div className="h-px flex-1 bg-gray-300" />
      </div>

      {/* Email */}
      <div className="flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white shadow">
          <Mail size={22} className="text-[#E67817]" />
        </div>

        <div>
          <p className="text-sm text-gray-500">
            Send us E-mail
          </p>

          <p className="text-lg font-semibold text-[#111827]">
            needhelp@example.com
          </p>
        </div>
      </div>
    </div>
  );
}