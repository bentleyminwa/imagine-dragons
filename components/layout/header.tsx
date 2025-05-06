import Image from "next/image";

export default function Header() {
  return (
    <header className="relative row-start-1 row-end-2">
      <Image
        src={"/images/hero.jpeg"}
        alt="imagine dragons"
        fill
        className="rounded-br-2xl rounded-bl-2xl"
      />
    </header>
  );
}
