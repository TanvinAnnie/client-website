import Image from "next/image";

interface ClientInfoProps {
  image: string;
  name: string;
  designation: string;
  company: string;
}

export default function ClientInfo({
  image,
  name,
  designation,
  company,
}: ClientInfoProps) {
  return (
    <div className="mt-8 flex flex-col items-center">
      <Image
        src={image}
        alt={name}
        width={80}
        height={80}
        className="mb-4 h-20 w-20 rounded-full object-cover border-4 border-white shadow-lg"
      />

      <h4 className="text-xl font-semibold text-white">
        {name}
      </h4>

      <p className="mt-1 text-sm text-gray-300">
        {designation}
      </p>

      <p className="text-sm font-medium text-[#D96C2C]">
        {company}
      </p>
    </div>
  );
}