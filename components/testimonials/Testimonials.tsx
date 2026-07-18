import TestimonialCard from "./TestimonialCard";
import { testimonials } from "@/constants/testimonials";

export default function Testimonials() {
  return (
    <section
      className="relative overflow-hidden py-24 lg:py-32"
      style={{
        backgroundImage: "url('/images/testimonials/bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/75 to-black/80" />

      {/* Orange Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(217,108,44,.18),transparent_35%)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-6 flex items-center justify-center gap-4">
            <span className="h-[2px] w-12 bg-[#D96C2C]" />

            <p className="text-sm font-semibold uppercase tracking-[4px] text-[#D96C2C]">
              What Client Says
            </p>

            <span className="h-[2px] w-12 bg-[#D96C2C]" />
          </div>

          <h2 className="mb-6 text-4xl font-bold uppercase text-white lg:text-5xl">
            Our Happy Customers
          </h2>

          <p className="leading-8 text-gray-300">
            We value every customer and strive to provide the best insurance
            experience with trusted support and quick claim processing.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 lg:grid-cols-3">
          {testimonials.map((item) => (
            <TestimonialCard
              key={item.id}
              review={item.review}
              rating={item.rating}
              image={item.image}
              name={item.name}
              designation={item.designation}
              company={item.company}
            />
          ))}
        </div>
      </div>
    </section>
  );
}