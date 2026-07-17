import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";

import { services } from "@/constants/services";
import InsuranceCard from "./InsuranceCard";

export default function InsuranceServices() {
  return (
    <section className="py-24">
      <Container>
        <SectionTitle
          subtitle="Services"
          title="Insurance Solutions For Everyone"
          description="Choose the perfect insurance plan for yourself, your family, and your business."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <InsuranceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}