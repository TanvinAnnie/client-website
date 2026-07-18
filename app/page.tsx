import Hero from "@/components/hero/hero";
import InsuranceTabs from "@/components/insurance/InsuranceTabs";
import Categories from "@/components/categories/Categories";
import ClaimSection from "@/components/claim/ClaimSection";
import Partners from "@/components/partners/Partners";
import Testimonials from "@/components/testimonials/Testimonials";

export default function Home() {
  return (
   <>
  <Hero />

  <InsuranceTabs />

  <Categories />

  <ClaimSection />

  <Partners />



  <Testimonials />
</>
  );
}