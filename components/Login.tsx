import Link from "next/link";

const Login = () => {
  return (
    <Link
      href="/api/auth/login"
      className="px-4 py-1 rounded-lg text-white bg-black/80 dark:bg-white/80 dark:text-black/70"
    >
      Login
    </Link>
  );
};

export default Login;
