import BranchList from "./BranchList";

export default function Home() {
  return (
    <main className="flex flex-col items-center text-center">
      <h1 className="text-center text-2xl p-24">NextJs Guide</h1>
      <BranchList />
    </main>
  );
}
