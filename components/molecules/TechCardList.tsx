import TechCard from "../atoms/TechCard";

interface ITechCardList {
  techs: Array<string>;
}

const TechCardList: React.FC<ITechCardList> = ({ techs }) => {
  return (
    <>
      <ul className="flex flex-row max-w-[58.82353%] flex-wrap items-center justify-start">
        {techs.map((tech, i) => {
          return <TechCard tech={tech} key={i} />;
        })}
      </ul>
    </>
  );
};

export default TechCardList;
