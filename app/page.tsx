import BranchList from "./BranchList";

export default function Home() {
  return (
    <main className="flex flex-col items-center text-center">
      <h1 className="text-center text-2xl mt-14 mb-10">NextJs Guide</h1>
      <BranchList />
    </main>
  );
}
