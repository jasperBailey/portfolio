import Socials from "../molecules/Socials";

const Profile = () => {
  return (
    <header className="flex flex-col lg:py-24 lg:w-1/2 lg:min-h-screen lg:justify-between">
      <section>
        <h1 className="text-5xl text-slate-200 font-bold">Jasper Bailey</h1>
        <h2 className="text-xl text-slate-200 font-medium mt-3">
          Software Developer
        </h2>
        <p className="max-w-xs mt-3">
          Full-stack software developer proficient in JavaScript, Python, Java, and more. Used to be a physicist.
        </p>
      </section>

      <Socials />
    </header>
  );
};

export default Profile;
