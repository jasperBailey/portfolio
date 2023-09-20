import Socials from "../molecules/Socials";

const Profile = () => {
  return (
    <header className="flex flex-col lg:sticky lg:top-0 lg:py-24 lg:w-1/2 lg:max-h-screen lg:justify-between">
      <section>
        <h1>Jasper Bailey</h1>
        <h2>Software Developer</h2>
        <p className="max-w-xs mt-3">
          Full-stack software developer proficient in JavaScript, Python, Java,
          and more. Used to be a physicist.
        </p>
        <div className="mt-12 hidden lg:block max-w-xs">
          <img
            className="rounded-[108px]"
            src={process.env.PUBLIC_URL + "me.jpg"}
          />
        </div>
      </section>

      <Socials />
    </header>
  );
};

export default Profile;
