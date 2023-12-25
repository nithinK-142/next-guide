import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";

const Navbar = () => {
  return (
    <div className="bg-black dark:bg-slate-600 px-4 py-2 flex items-center justify-center ">
      <div className="w-[40rem] flex justify-between text-white">
        <h2 className="text-xl font-medium">NextDark</h2>
        <div className="flex space-x-2">
          <Link href={"/"}>Home</Link>
          <Link href={"/"}>About</Link>
          <ThemeSwitch />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
