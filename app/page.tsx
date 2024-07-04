import LoadMore from "@/components/LoadMore";
import AnimeCard, { AnimeProp } from "../components/AnimeCard";
import { fetchAnime } from "./action";

export default async function Home() {
  const data = await fetchAnime(1);
  return (
    <>
      <h1 className="text-center text-2xl my-10 tracking-widest group">
        <span className="text-4xl inline-block rotate-12 group-hover:rotate-0 transition-transform duration-300">
          A
        </span>
        <span className="inline-block rotate-0 group-hover:rotate-12 transition-transform duration-300">
          NIME
        </span>
        <span className="text-4xl inline-block rotate-12 group-hover:rotate-0 transition-transform duration-300">
          L
        </span>
        <span className="inline-block rotate-0 group-hover:rotate-12 transition-transform duration-300">
          IST
        </span>
      </h1>

      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {data.map((anime: AnimeProp, index: number) => (
          <AnimeCard key={anime.id} anime={anime} index={index} />
        ))}
      </section>

      <LoadMore />
    </>
  );
}
