import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Icon from "../atoms/Icon";

const Socials:React.FC = () => {
  return (
    <ul className="flex flex-row mt-12">
      <Icon href="https://www.github.com/jasperbailey" definition={faGithub}/>
      <Icon href="mailto:jasperbailey98@gmail.com" definition={faEnvelope}/>
      <Icon href="https://www.linkedin.com/in/jasperbailey" definition={faLinkedin}/>
    </ul>
  );
};

export default Socials;
