"use client";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Authenticate() {
  const { data: session } = useSession();
  if (session) {
    return (
      <div className="flex- flex-col space-y-6">
        <h3 className="text-green-400/80 text-lg">
          Signed in as
          <span className="text-green-400 text-2xl">
            {" "}
            {session.user?.email}
          </span>
        </h3>
        <button
          onClick={() => signOut()}
          className="px-4 py-1 rounded-lg text-white bg-black/80 dark:bg-white/80 dark:text-black/70"
        >
          Sign out
        </button>
      </div>
    );
  }
  return (
    <div className="flex- flex-col space-y-6">
      <h3 className="text-red-400 text-lg">Not signed in </h3>
      <button
        onClick={() => signIn()}
        className="px-4 py-1 rounded-lg text-white bg-black/80 dark:bg-white/80 dark:text-black/70"
      >
        Sign in
      </button>
    </div>
  );
}
