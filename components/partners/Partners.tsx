import PartnerCard from "./PartnerCard";
import { partners } from "@/constants/partners";

export default function Partners() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-semibold uppercase tracking-wide text-black">
            Our Genuine Trusted Partners & Clients
          </h2>
        </div>

        {/* Partner Grid */}
        <div className="grid grid-cols-2 overflow-hidden border border-[#D9D9D9] md:grid-cols-4 lg:grid-cols-7">
          {partners.map((partner) => (
            <PartnerCard
              key={partner.id}
              name={partner.name}
              logo={partner.logo}
            />
          ))}
        </div>
      </div>
    </section>
  );
}