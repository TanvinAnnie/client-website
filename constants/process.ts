export interface ProcessItem {
  id: number;
  step: string;
  title: string;
  description: string;
  image: string;
}

export const processItems: ProcessItem[] = [
  {
    id: 1,
    step: "01",
    title: "Choose Your Insurance",
    description:
      "Select the insurance plan that best fits your personal or business needs with expert guidance.",
    image: "/images/process/process-1.jpg",
  },
  {
    id: 2,
    step: "02",
    title: "Submit Your Information",
    description:
      "Fill out a simple application form with accurate details to start your insurance process quickly.",
    image: "/images/process/process-2.jpg",
  },
  {
    id: 3,
    step: "03",
    title: "Get Approved & Protected",
    description:
      "After verification, receive your policy instantly and enjoy complete insurance protection.",
    image: "/images/process/process-3.jpg",
  },
];