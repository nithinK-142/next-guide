import { pause } from "@/lib/utils";
import Image from "next/image";
import charizard from "../assets/charizard-pixel.png";

export default async function Charizard() {
  await pause(1000);

  return (
    <section className="h-96 w-96 border-2 rounded-lg p-4 bg-slate-300">
      <Image
        src={charizard}
        height={1080}
        width={1080}
        alt="charizard"
        className="w-full h-full object-cover rounded-md"
      />
    </section>
  );
}
