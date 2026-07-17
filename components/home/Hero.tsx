import Container from "@/components/common/Container";
import Button from "@/components/ui/button";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-[#F8F3F1]">
      <Container>
        <div className="grid min-h-[700px] items-center gap-12 py-20 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <span className="rounded-full bg-[#B64627]/10 px-4 py-2 text-sm font-semibold text-[#B64627]">
              Trusted Insurance Company
            </span>

            <h1 className="mt-6 text-5xl font-bold leading-tight text-[#111827] lg:text-6xl">
              Protect What Matters Most With Confidence
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
              We provide reliable insurance solutions for individuals,
              families, and businesses. Fast claims, affordable plans,
              and trusted customer support.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button>
                Get A Quote
              </Button>

              <button className="rounded-lg border border-gray-300 px-6 py-3 font-medium transition hover:border-[#B64627] hover:text-[#B64627]">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative flex justify-center">
            <Image
              src="/images/hero/hero.png"
              alt="Hero"
              width={600}
              height={600}
              priority
              className="h-auto w-full max-w-[550px]"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}