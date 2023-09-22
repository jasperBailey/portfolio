interface ITechCard {
    tech: string;
}


const TechCard:React.FC<ITechCard> = ({tech}) => {
    return ( <>
        <li className="mr-3 border-solid border-[1px] border-slate-400 rounded px-1 py-1/2 mt-3 text-sm">{tech}</li>
    </> );
}
 
export default TechCard;