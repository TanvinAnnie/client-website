import { LucideIcon } from "lucide-react";

interface InsuranceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export default function InsuranceCard({
  title,
  description,
  icon: Icon,
}: InsuranceCardProps) {
  return (
    <div className="group rounded-2xl border bg-white p-8 transition duration-300 hover:-translate-y-2 hover:border-[#B64627] hover:shadow-xl">
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-[#B64627]/10 transition group-hover:bg-[#B64627]">
        <Icon className="h-8 w-8 text-[#B64627] transition group-hover:text-white" />
      </div>

      <h3 className="mb-3 text-xl font-semibold">
        {title}
      </h3>

      <p className="text-gray-600">
        {description}
      </p>
    </div>
  );
}