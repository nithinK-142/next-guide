import { pause } from "@/lib/utils";
import Image from "next/image";
import venusaur from "../assets/venusaur-pixel2.jpg";
import pikachu from "../assets/pika.png";

export default async function MorePokemon() {
  await pause(3000);

  const pokemonImages = [
    { src: venusaur, alt: "venusaur" },
    { src: pikachu, alt: "pikachu" },
  ];

  return pokemonImages.map((pokemon, index) => (
    <section
      key={index}
      className="h-96 w-96 border-2 rounded-lg p-4 bg-slate-300"
    >
      <Image
        src={pokemon.src}
        height={1080}
        width={1080}
        alt={pokemon.alt}
        className="w-full h-full object-cover rounded-md"
      />
    </section>
  ));
}
