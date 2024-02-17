import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 className="text-center text-2xl p-24">NextJs Guide</h1>
      <nav className="flex items-center justify-center space-x-4 text-2xl">
        <Link href={"/about"}>About</Link>
        <Link href={"/dashboard"}>Dashboard</Link>
      </nav>
    </main>
  );
}
