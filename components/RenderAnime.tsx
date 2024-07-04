import { Props } from "@/utils/constants";
import AnimeCard from "./AnimeCard";

export const RenderAnime: React.FC<Props> = ({ data }) => {
  return (
    <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
      {data.map((anime) => (
        <AnimeCard key={anime.id} anime={anime} index={0} />
      ))}
    </section>
  );
};
