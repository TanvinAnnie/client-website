import FooterCTA from "./FooterCTA";
import FooterNav from "./FooterNav";
import PaymentChannels from "./PaymentChannels";
import FooterBottom from "./FooterBottom";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-[#FFFDFB] via-[#F9F6F2] to-[#F2ECE7]">
      {/* Decorative Circle */}
      <div className="absolute -left-32 -top-32 h-72 w-72 rounded-full bg-[#B54426]/5 blur-3xl" />

      <div className="absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-[#B54426]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-28">
        <FooterCTA />

        <FooterNav />

        <PaymentChannels />

        <FooterBottom />
      </div>
    </footer>
  );
}