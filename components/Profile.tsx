import { OPTIONS } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";
import SignoutButton from "./SignoutButton";

const Profile = async () => {
  const session = await getServerSession(OPTIONS);
  return (
    session && (
      <div className="flex- flex-col space-y-6">
        <h3 className="text-green-400/80 text-lg">
          Signed in as{" "}
          <span className="text-green-400 text-2xl">{session.user?.name}</span>
        </h3>
        <SignoutButton />
      </div>
    )
  );
};

export default Profile;
