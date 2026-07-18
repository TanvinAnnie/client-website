export interface Testimonial {
  id: number;
  review: string;
  rating: number;
  image: string;
  name: string;
  designation: string;
  company: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    review:
      "The insurance process was smooth and professional. Highly recommended for anyone looking for reliable coverage.",
    rating: 5,
    image: "/images/testimonials/client-1.jpg",
    name: "John Smith",
    designation: "CEO",
    company: "Walton Group",
  },
  {
    id: 2,
    review:
      "Excellent customer service and very fast claim settlement. I am completely satisfied with the experience.",
    rating: 5,
    image: "/images/testimonials/client-2.jpg",
    name: "Sarah Khan",
    designation: "Business Owner",
    company: "ABC Ltd",
  },
  {
    id: 3,
    review:
      "Their support team is responsive and the insurance plans are affordable. I would definitely recommend them.",
    rating: 5,
    image: "/images/testimonials/client-3.jpg",
    name: "Michael Brown",
    designation: "Manager",
    company: "XYZ Corporation",
  },
];