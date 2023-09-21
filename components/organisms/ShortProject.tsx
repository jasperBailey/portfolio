import TechCardList from "../molecules/TechCardList";

interface IShortProject {
    title: string,
    year: string,
    summary: string,
    previewImg: string,
    techs: Array<string>,
}

const ShortProject:React.FC<IShortProject> = ({title, year, summary, previewImg, techs}) => {
  return (
    <>
      <h4>{title}</h4>
      <h4>{year}</h4>
      <img src={previewImg}/>
      <p>{summary}</p>
      <TechCardList techs={techs}/>
    </>
  );
};

export default ShortProject;
