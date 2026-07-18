"use client";

import InsuranceTab from "./InsuranceTab";
import QuoteForm from "./QuoteForm";
import { insuranceTypes } from "@/constants/insurance";

export default function InsuranceTabs() {
  return (
    <section className="bg-[#FBF2EF] py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-center justify-center gap-8">
          {insuranceTypes.map((item) => (
            <InsuranceTab
              key={item.id}
              title={item.title}
              icon={item.icon}
              active={item.active}
            />
          ))}
        </div>

        <QuoteForm />
      </div>
    </section>
  );
}