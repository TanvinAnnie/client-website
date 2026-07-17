import {
  HeartPulse,
  Car,
  Plane,
  Users,
  Ship,
  HardHat,
  MoreHorizontal,
} from "lucide-react";

export const insuranceTypes = [
  {
    id: 1,
    title: "Health",
    icon: HeartPulse,
    active: true,
  },
  {
    id: 2,
    title: "Car",
    icon: Car,
    active: false,
  },
  {
    id: 3,
    title: "Travel",
    icon: Plane,
    active: false,
  },
  {
    id: 4,
    title: "Life",
    icon: Users,
    active: false,
  },
  {
    id: 5,
    title: "Marine",
    icon: Ship,
    active: false,
  },
  {
    id: 6,
    title: "Engineering",
    icon: HardHat,
    active: false,
  },
  {
    id: 7,
    title: "More",
    icon: MoreHorizontal,
    active: false,
  },
];