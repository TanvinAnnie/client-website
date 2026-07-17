"use client";

import Link from "next/link";
import { useState } from "react";

import { ChevronDown, Menu, X, ArrowUpRight } from "lucide-react";

import Container from "@/components/common/Container";
import Logo from "./logo";
import { navigation } from "@/constants/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <Container>
        <div className="flex h-[78px] items-center justify-between">

          <Logo />

          {/* Desktop */}

          <nav className="hidden items-center gap-10 lg:flex">
            {navigation.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group relative flex items-center gap-1 text-[17px] font-medium text-[#111827] transition hover:text-[#B64627]"
              >
                {item.title}

                {item.dropdown && (
                  <ChevronDown
                    size={17}
                    className="transition group-hover:rotate-180"
                  />
                )}

                {item.title === "Home" && (
                  <span className="absolute -bottom-[28px] left-0 h-[2px] w-full bg-[#B64627]" />
                )}
              </Link>
            ))}
          </nav>

          {/* Quote Button */}

          <button className="hidden h-[52px] items-center gap-2 rounded-md bg-[#B64627] px-8 font-semibold text-white transition hover:bg-[#9E3C22] lg:flex">
            Get A Quote

            <ArrowUpRight size={18} />
          </button>

          {/* Mobile */}

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden"
          >
            {open ? (
              <X size={30} />
            ) : (
              <Menu size={30} />
            )}
          </button>

        </div>

        {/* Mobile Menu */}

        {open && (
          <div className="border-t py-6 lg:hidden">

            <div className="flex flex-col gap-6">

              {navigation.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between text-lg font-medium"
                >
                  {item.title}

                  {item.dropdown && <ChevronDown size={18} />}
                </Link>
              ))}

              <button className="mt-3 h-[48px] rounded-md bg-[#B64627] font-semibold text-white">
                Get A Quote
              </button>

            </div>

          </div>
        )}
      </Container>
    </header>
  );
}