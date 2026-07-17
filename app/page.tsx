import Hero from "@/components/hero/hero";
import InsuranceTabs from "@/components/insurance/InsuranceTab";
import Categories from "@/components/categories/Categories";
import MainLayout from "@/components/layout/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <Hero />

      <InsuranceTabs />

      <Categories />
    </MainLayout>
  );
}