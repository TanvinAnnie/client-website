import ClaimCard from "./ClaimCard";
import ClaimImage from "./ClaimImage";

export default function ClaimSection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
        {/* Left Side */}
        <ClaimImage />

        {/* Right Side */}
        <ClaimCard />
      </div>
    </section>
  );
}