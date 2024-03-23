import Link from "next/link";

const Logout = () => {
  return (
    <Link
      href="/api/auth/logout"
      className="px-4 py-1 rounded-lg text-white bg-black/80 dark:bg-white/80 dark:text-black/70"
    >
      Logout
    </Link>
  );
};

export default Logout;
