import Link from "next/link";

const BackButton = () => {
  return (
    <Link
      href={"/"}
      className="px-4 py-1 text-blue-500 transition-colors duration-500 rounded-lg hover:bg-white/80 hover:text-black"
    >
      Go Back
    </Link>
  );
};

export default BackButton;
