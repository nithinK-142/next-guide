import BackButton from "../BackButton";

const about = () => {
  return (
    <div className="flex flex-col space-y-4 items-center pt-24">
      <BackButton />
      <h2 className="text-center text-xl">About</h2>
    </div>
  );
};

export default about;
