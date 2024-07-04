"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { fetchAnime } from "@/app/action";
import { RenderAnime } from "./RenderAnime";
import { AnimeProp } from "@/utils/constants";

let page = 2;

function LoadMore() {
  const { ref, inView } = useInView();
  const [data, setData] = useState<AnimeProp[]>([]);

  useEffect(() => {
    if (inView) {
      fetchAnime(page).then((res) => setData([...data, ...res]));
      page++;
    }
  }, [inView, data]);
  return (
    <>
      <RenderAnime data={data} />

      <section className="flex justify-center items-center w-full mb-4">
        <div ref={ref}>
          <Image
            src="./spinner.svg"
            alt="spinner"
            width={40}
            height={40}
            className="object-contain"
          />
        </div>
      </section>
    </>
  );
}

export default LoadMore;
