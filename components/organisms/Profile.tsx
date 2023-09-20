import Socials from "../molecules/Socials";

const Profile:React.FC = () => {
  return (
    <header className="flex flex-col lg:sticky lg:top-0 lg:py-24 lg:w-1/2 lg:max-h-screen lg:justify-between">
      <section>
        <h1>Jasper Bailey</h1>
        <h2>Software Developer</h2>
        <p className="max-w-xs mt-3">
          Full-stack software developer proficient in JavaScript, Python, Java,
          and more. Used to be a physicist.
        </p>
      </section>
      <div
        className="max-w-xs mt-6 flex flex-col justify-between 
                  xs:flex-row 
                  lg:flex-col lg:mt-12 lg:h-screen"
        id="image-socials"
      >
        <img
          className=" max-w-[128px] rounded-[46px] mr-4 
                      lg:max-w-xs lg:rounded-[108px]"
          src={process.env.PUBLIC_URL + "me.jpg"}
        />
        <Socials />
      </div>
    </header>
  );
};

export default Profile;
