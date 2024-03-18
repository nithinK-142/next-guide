import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="fixed w-full bg-black dark:bg-slate-600 px-4 py-3 flex items-center justify-center ">
      <div className="w-[46rem] flex items-center justify-between text-white">
        <Link href={"/"} className="hidden sm:block">
          <h2 className=" text-3xl font-mono font-semibold">NextDark</h2>
        </Link>
        <div className="flex items-center space-x-4 text-xl">
          <Link href={"https://nithin-me.vercel.app"}>
            <Image src="/home.svg" alt="home" width={32} height={32} />
          </Link>
          <Link
            href={"https://github.com/nithinK-142"}
            rel="noreferrer"
            target="_blank"
          >
            <Image src="/git.svg" alt="git" width={36} height={36} />
          </Link>
          <Link
            href={"https://twitter.com/_nithin142"}
            rel="noreferrer"
            target="_blank"
          >
            <Image src="/x.svg" alt="twitter" width={32} height={32} />
          </Link>
          <ThemeSwitch />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
