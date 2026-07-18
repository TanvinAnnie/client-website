"use client";

import { LucideIcon } from "lucide-react";

interface InsuranceTabProps {
  title: string;
  icon: LucideIcon;
  active: boolean;
}

export default function InsuranceTab({
  title,
  icon: Icon,
  active,
}: InsuranceTabProps) {
  return (
    <button
      className={`flex items-center gap-2 rounded-lg px-5 py-3 transition ${
        active
          ? "bg-blue-600 text-white"
          : "bg-white text-gray-700 border"
      }`}
    >
      <Icon size={20} />
      <span>{title}</span>
    </button>
  );
}