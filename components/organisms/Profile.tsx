import Socials from "../molecules/Socials";

const Profile = () => {
  return (
    <header className="flex flex-col items-center">
      <h1 className="text-4xl font-bold">Jasper Bailey</h1>
      <h2 className="text-2xl">Software Developer</h2>
      <Socials />
    </header>
  );
};

export default Profile;
