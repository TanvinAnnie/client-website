import Link from "next/link";

export default function FooterBottom() {
  return (
    <div className="mt-20 border-t border-gray-200 pt-8">
      <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
        {/* Copyright */}
        <p className="text-gray-600">
          Copyright ©{" "}
          <span className="font-semibold text-[#B54426]">
            360D Soul Limited
          </span>{" "}
          2025. All rights reserved.
        </p>

        {/* Links */}
        <div className="flex flex-wrap items-center justify-center gap-8 text-gray-600">
          <Link
            href="/terms"
            className="transition-colors duration-300 hover:text-[#B54426]"
          >
            Terms & Condition
          </Link>

          <Link
            href="/privacy-policy"
            className="transition-colors duration-300 hover:text-[#B54426]"
          >
            Privacy & Policy
          </Link>

          <Link
            href="/refund-policy"
            className="transition-colors duration-300 hover:text-[#B54426]"
          >
            Refund Policy
          </Link>
        </div>
      </div>
    </div>
  );
}