import { pause } from "@/lib/utils";
import Image from "next/image";
import blastoise from "../assets/blastoise-pixel.png";

export default async function Blastoise() {
  await pause(3000);

  //throw new Error('Data not available')

  return (
    <section className="h-96 w-96 border-2 rounded-lg p-4 bg-slate-300">
      <Image
        src={blastoise}
        height={1080}
        width={1080}
        alt="blastoise"
        className="w-full h-full object-cover rounded-md"
      />
    </section>
  );
}
