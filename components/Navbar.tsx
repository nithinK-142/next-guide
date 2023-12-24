import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="bg-gray-700 px-4 py-2 flex items-center justify-center ">
      <div className="w-96 flex justify-between bg-pink-600">
        <h2 className="dark:text-white text-xl font-medium">NextDark</h2>
        <div className="flex space-x-2">
          <Link href={"/"}>Home</Link>
          <Link href={"/"}>About</Link>
          <button>
            <Image
              src="./sun.svg"
              alt="sun"
              className="h-6"
              width={24}
              height={24}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
