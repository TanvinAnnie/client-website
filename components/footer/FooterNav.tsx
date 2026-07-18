import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { footerMenu, socialLinks } from "@/constants/footer";

export default function FooterNav() {
  return (
    <div className="mt-16 flex flex-col items-center">
      {/* Navigation */}
      <nav className="flex flex-wrap items-center justify-center gap-8 text-lg font-medium text-gray-800">
        {footerMenu.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className="flex items-center gap-1 transition-colors duration-300 hover:text-[#B54426]"
          >
            {item.title}

            {(item.title === "Services" || item.title === "Claims") && (
              <ChevronDown size={18} />
            )}
          </Link>
        ))}
      </nav>

      {/* Social Icons */}
      <div className="mt-12 flex items-center gap-8">
        {socialLinks.map((item, index) => {
          const Icon = item.icon;

          return (
           <Link
  key={index}
  href={item.href}
  className="
    flex
    h-12
    w-12
    items-center
    justify-center
    rounded-full
    border
    border-gray-200
    bg-white
    shadow-md
    transition-all
    duration-300
    hover:-translate-y-1
    hover:border-[#B54426]
    hover:bg-[#B54426]
    hover:text-white
  "
>
  <Icon size={20} />
</Link>
          );
        })}
      </div>

      {/* Business Hours */}
      <p className="mt-10 text-2xl font-medium text-gray-800">
        Sunday to Thursday : 10 AM to 6 PM
      </p>
    </div>
  );
}