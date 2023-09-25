import TechCardList from "../molecules/TechCardList";

interface IShortProject {
  title: string;
  year: string;
  summary: string;
  previewImg: string;
  githubUrl: string;
  techs: Array<string>;
}

const ShortProject: React.FC<IShortProject> = ({
  title,
  year,
  summary,
  previewImg,
  githubUrl,
  techs,
}) => {
  return (
    <>
      <a href={githubUrl}>
        <div className="flex flex-col justify-center">
          <h4>{title}</h4>
          <p className="text-sm">{year}</p>
        </div>

        <div
          className="flex flex-col mb-3
                   lg:flex-row"
        >
          <div
            className="flex max-w-[224px] justify-center bg-black
                        lg:w-[41.17647%] lg:mr-3"
          >
            <img className="max-h-[126px]" src={previewImg} />
          </div>
          <TechCardList techs={techs} />
        </div>

        <p>{summary}</p>
        <hr className="border-slate-400 my-3 max-w-sm" />
      </a>
    </>
  );
};

export default ShortProject;
