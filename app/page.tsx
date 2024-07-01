import BranchList from "./BranchList";

export default function Home() {
  return (
    <main className="flex flex-col items-center text-center">
      <h1 className="text-center text-2xl my-20">NextJs Guide</h1>
      <BranchList />
    </main>
  );
}
