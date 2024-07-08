import Search from "@/components/Search";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-12">
      <h1 className="pb-6 text-2xl font-medium">Next Dynamic Widgets</h1>
      <Search />
    </main>
  );
}
