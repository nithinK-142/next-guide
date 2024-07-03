export default function Default() {
  return Array.from({ length: 100 }).map((_, index) => (
    <section
      key={index}
      className="h-96 w-96 border-2 rounded-lg p-4 bg-gray-300"
    >
      <h2 className="text-xl text-black">failed to load pokemon...</h2>
    </section>
  ));
}
