import Container from "@/components/common/Container";
import { Play, ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="relative h-[720px] overflow-hidden bg-cover "
      style={{
        backgroundImage: "url('/images/hero/hero.png')",
      }}
    >
      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-black/55" />

      {/* Grain */}

      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/asfalt-dark.png')",
        }}
      />

      <Container className="relative z-10 flex h-full items-center">
        <div className="max-w-[700px]">

          {/* Small Heading */}

          <div className="mb-8 flex items-center gap-4">

            <div className="h-[2px] w-14 bg-white" />

            <p className="text-lg font-semibold text-white">
              Protecting Value Through Innovation
            </p>

          </div>

          {/* Main Heading */}

          <h1 className="text-[68px] font-bold leading-[1.15] tracking-[-2px] text-white">
            Leading Insurance Solutions for Your Peace of Mind
          </h1>

          {/* Description */}

          <p className="mt-8 max-w-[650px] text-[22px] leading-10 text-white/90">
            Purabi General Insurance Company Limited (PGICL),
            established in 1988, is a leading insurer in Bangladesh,
            providing comprehensive asset protection for corporate
            organizations.
          </p>

          {/* Buttons */}

          <div className="mt-12 flex items-center gap-10">

            <button className="flex h-[60px] items-center gap-3 rounded bg-[#B64627] px-10 text-lg font-semibold text-white transition hover:bg-[#99381E]">

              DISCOVER MORE

              <ArrowUpRight size={18} />

            </button>

            <button className="flex items-center gap-4">

              <div className="flex h-[72px] w-[72px] items-center justify-center rounded-full border-2 border-white">

                <Play
                  fill="white"
                  className="ml-1 text-white"
                  size={28}
                />

              </div>

              <span className="text-2xl font-semibold text-white">
                WATCH VIDEO
              </span>

            </button>

          </div>

        </div>
      </Container>
    </section>
  );
}