import CategoryCard from "./CategoryCard";
import { categories } from "@/constants/categories";

export default function Categories() {
  return (
    <section className="py-24 bg-white">

      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <h5 className="text-[#B64627] font-semibold tracking-[3px] uppercase">
            Insurance
          </h5>

          <h2 className="mt-4 text-5xl font-bold">
            CATEGORIES OF INSURANCE
          </h2>

          <p className="mx-auto mt-6 max-w-4xl text-gray-500">
            At SIPLC, we exceed customer expectations by being available
            both physically and virtually on their preferred channels.
            Ensuring every citizen can access insurance benefits.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {categories.map((item) => (
            <CategoryCard
              key={item.id}
              title={item.title}
              image={item.image}
              description={item.description}
            />
          ))}

        </div>

        <div className="mt-20 flex justify-center">

          <button className="flex h-[60px] items-center gap-3 rounded bg-[#B64627] px-10 text-white text-lg font-semibold hover:bg-[#98391F] transition">

            See More

            <ArrowUpRight size={18} />

          </button>

        </div>

      </div>

    </section>
  );
}
