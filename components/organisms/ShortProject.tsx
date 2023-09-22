import TechCardList from "../molecules/TechCardList";

interface IShortProject {
  title: string;
  year: string;
  summary: string;
  previewImg: string;
  techs: Array<string>;
}

const ShortProject: React.FC<IShortProject> = ({
  title,
  year,
  summary,
  previewImg,
  techs,
}) => {
  return (
    <>
      <div className="flex flex-col justify-center">
        <h4>{title}</h4>
        <p className="text-sm">{year}</p>
      </div>

      <div className="flex flex-row mb-3">
        <div>
          <img className="max-h-[120px]" src={previewImg} />
        </div>
        <TechCardList techs={techs} />
      </div>

      <p>{summary}</p>
      <hr className="border-slate-400 my-3 max-w-sm"/>
    </>
  );
};

export default ShortProject;
