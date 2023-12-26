import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";

const Navbar = () => {
  return (
    <div className="fixed w-full bg-black dark:bg-slate-600 px-4 py-4 flex items-center justify-center ">
      <div className="w-[46rem] flex items-center justify-between text-white">
        <h2 className="hidden sm:block text-2xl font-medium">NextDark</h2>
        <div className="flex space-x-4 text-xl">
          <Link href={"/"}>Home</Link>
          <Link href={"/"}>About</Link>
          <ThemeSwitch />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
