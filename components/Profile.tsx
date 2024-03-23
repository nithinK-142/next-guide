import { getSession } from "@auth0/nextjs-auth0";
import Logout from "./Logout";
import Login from "./Login";

const ProfileClient = async () => {
  const session = await getSession();
  const user = session?.user;
  console.log(session);

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
