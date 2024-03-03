import BackButton from "../BackButton";

const dashboard = () => {
  return (
    <div className="flex flex-col space-y-4 items-center pt-24">
      <BackButton />
      <h2 className="text-center text-xl">dashboard</h2>
    </div>
  );
};

export default dashboard;
