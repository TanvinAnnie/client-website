import Container from "@/components/common/Container";
import { MapPin, Mail, Phone } from "lucide-react";

import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function TopHeader() {
  return (
    <div className="hidden h-11 w-full bg-[#B64627] text-white lg:block">
      <Container className="flex h-full items-center justify-between">
        {/* Left Side */}

        <div className="flex items-center gap-5 text-[13px]">

          <div className="flex items-center gap-2">
            <MapPin size={14} />
            <span>
              Sandhani Life Tower (2nd Floor), 34 Bangla Motor, Dhaka - 1000.
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Mail size={14} />
            <span>purabiinsurance@gmail.com</span>
          </div>

          <div className="flex items-center gap-2">
            <Phone size={14} />
            <span>+880 1714-044146</span>
          </div>

        </div>

        {/* Right Side */}

        <div className="flex items-center">

          <button className="border-r border-white/20 px-5 text-[13px] font-medium uppercase transition hover:text-gray-200">
            Client Portal
          </button>

          <button className="border-r border-white/20 px-5 text-[13px] font-medium uppercase transition hover:text-gray-200">
            Agent Portal
          </button>

          <div className="ml-5 flex items-center gap-3">

            <a
              href="#"
              className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20 transition hover:bg-white hover:text-[#B64627]"
            >
              <FaFacebookF size={12} />
            </a>

            <a
              href="#"
              className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20 transition hover:bg-white hover:text-[#B64627]"
            >
              <FaTwitter size={12} />
            </a>

            <a
              href="#"
              className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20 transition hover:bg-white hover:text-[#B64627]"
            >
              <FaYoutube size={12} />
            </a>

            <a
              href="#"
              className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20 transition hover:bg-white hover:text-[#B64627]"
            >
              <FaInstagram size={12} />
            </a>

            <a
              href="#"
              className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20 transition hover:bg-white hover:text-[#B64627]"
            >
              <FaLinkedinIn size={12} />
            </a>

          </div>

        </div>
      </Container>
    </div>
  );
}