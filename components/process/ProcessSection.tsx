import ProcessCard from "./ProcessCard";
import SectionTitle from "./SectionTitle";
import { processItems } from "@/constants/process";

export default function ProcessSection() {
  return (
    <section
      className="relative overflow-hidden py-24 lg:py-32"
      style={{
        backgroundImage: "url('/images/process/process-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* =========================
          Dark Overlay
      ========================== */}

      <div className="absolute inset-0 bg-black/70" />

      {/* Orange Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(217,108,44,.18),transparent_35%)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Glass Container */}
        <div className="rounded-[36px] border border-white/15 bg-white/10 p-8 shadow-2xl backdrop-blur-xl lg:p-16">
          <SectionTitle
            subtitle="Insurance Simplified"
            title="Our Working Process"
            description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form by injected humour or randomised words."
          />

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {processItems.map((item) => (
              <ProcessCard
                key={item.id}
                step={item.step}
                title={item.title}
                description={item.description}
                image={item.image}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}