"use client";
import { signOut } from "next-auth/react";

export default function SignoutButton() {
  return (
    <button
      onClick={() => signOut()}
      className="px-4 py-1 rounded-lg text-white bg-black/80 dark:bg-white/80 dark:text-black/70"
    >
      Sign out
    </button>
  );
}
