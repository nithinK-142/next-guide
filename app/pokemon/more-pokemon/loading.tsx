export default function Loading() {
  return [1, 2].map((item) => (
    <section
      key={item}
      className="h-96 w-96 border-2 rounded-lg p-4 bg-gray-300 animate-pulse"
    >
      <h2 className="text-xl text-black">whose that pokemon?</h2>
    </section>
  ));
}
