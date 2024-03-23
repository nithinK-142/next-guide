/* eslint-disable @next/next/no-img-element */
"use client";
import { useUser } from "@auth0/nextjs-auth0/client";
import Logout from "./Logout";
import Login from "./Login";

const ProfileClient = () => {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return user ? (
    <div className="flex- flex-col space-y-6">
      <h3 className="text-green-400/80 text-lg mb-10">
        Signed in as{" "}
        <span className="text-green-400 text-2xl">{user.name}</span>
      </h3>
      <Logout />
    </div>
  ) : (
    <Login />
  );
};
export default ProfileClient;
