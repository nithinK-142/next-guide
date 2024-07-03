import Link from "next/link";

export default function Header() {
  return (
    <nav className="py-2 flex gap-4 text-xl border-b-2">
      <Link href="/">Home</Link>
      <Link href="/pokemon">Pokemon</Link>
      <Link href="/pokemon/more-pokemon">More Pokemon</Link>
    </nav>
  );
}
