import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-[46rem] p-4 mt-12">
      <div className="flex flex-col sm:flex-row items-center">
        <div className="border-2 border-black dark:border-slate-600 rounded-full">
          <Image src="/git.png" alt="git" width={200} height={200} />
        </div>
        <h1 className="text-[2.5rem] font-medium pl-12 flex flex-col items-center">
          <span className="whitespace-nowrap">Hello and Welcome</span>
          <span className="block">👋 I&apos;m Lorem.</span>
        </h1>
      </div>
    </div>
  );
};

export default Hero;
