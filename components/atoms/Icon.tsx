import { IconDefinition, SizeProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface IIcon {
  definition: IconDefinition;
  href: string;
  size: SizeProp;
}

const Icon: React.FC<IIcon> = ({ definition, href, size }) => {
  return (
    <a href={href}>
      <FontAwesomeIcon
        icon={definition}
        size={size}
        style={{ color: "#E2E8F0" }}
      />
    </a>
  );
};

export default Icon;
