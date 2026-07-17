import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <Image
        src="/images/logo/logo.png"
        alt="Logo"
        width={220}
        height={70}
        priority
        className="h-auto w-[220px]"
      />
    </Link>
  );
}