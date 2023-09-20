import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface IIcon {
    definition: IconDefinition;
    href: string;
}

const Icon:React.FC<IIcon> = ({definition, href}) => {
  return (
    <li className="mr-5">
      <a href={href}>
        <FontAwesomeIcon
          icon={definition}
          size="2xl"
          style={{ color: "#E2E8F0" }}
        />
      </a>
    </li>
  );
};

export default Icon;
