import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";

const Navbar = () => {
  return (
    <div className="bg-gray-700 px-4 py-2 flex items-center justify-center ">
      <div className="w-96 flex justify-between bg-pink-600">
        <h2 className="dark:text-white text-xl font-medium">NextDark</h2>
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
