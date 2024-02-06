import SayHello from "@/components/SayHello";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center">
      <h1 className="text-lg sm:text-2xl p-24">NextJs Guide</h1>
      <SayHello />
    </main>
  );
}
