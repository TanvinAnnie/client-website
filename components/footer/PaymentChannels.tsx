import Image from "next/image";
import { paymentChannels } from "@/constants/footer";

export default function PaymentChannels() {
  return (
    <div className="mt-20">
      {/* Heading */}
      <p className="mb-6 text-sm font-medium text-gray-600">
        Payment Channels
      </p>

      {/* Logo Grid */}
      <div className="flex flex-wrap items-center gap-5">
        {paymentChannels.map((logo, index) => (
          <div
            key={index}
            className="
flex
h-20
w-28
items-center
justify-center
rounded-2xl
border
border-gray-100
bg-white
shadow-md
transition-all
duration-300
hover:-translate-y-1
hover:shadow-xl
"
          >
            <Image
              src={logo}
              alt={`Payment ${index + 1}`}
              width={70}
              height={36}
              className="h-auto w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}