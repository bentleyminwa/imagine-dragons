import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href={"/"} className="flex items-end gap-2">
      <Image
        src={"/images/logo.jpeg"}
        alt="imagine dragons logo"
        width={50}
        height={50}
        priority
      />
      <h1 className="text-2xl font-bold tracking-wider">Lab.</h1>
    </Link>
  );
}
