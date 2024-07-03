import Header from "./Header";

export default function PokemonLayout({
  children,
  blastoise,
  charizard,
}: Readonly<{
  children: React.ReactNode;
  blastoise: React.ReactNode;
  charizard: React.ReactNode;
}>) {
  return (
    <div className="p-8">
      <Header />
      <div className="flex gap-4 py-4">
        {blastoise}
        {charizard}
        {children}
      </div>
    </div>
  );
}
