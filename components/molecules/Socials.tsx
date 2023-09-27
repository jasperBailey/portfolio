import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Icon from "../atoms/Icon";

const Socials: React.FC = () => {
  return (
    <ul className="flex flex-row mt-12 short:mt-6">
      <li className="mr-5">
        <Icon
          href="https://www.github.com/jasperbailey"
          definition={faGithub}
          size="2xl"
        />
      </li>

      <li className="mr-5">
        <Icon
          href="mailto:jasperbailey98@gmail.com"
          definition={faEnvelope}
          size="2xl"
        />
      </li>
      <li className="mr-5">
        <Icon
          href="https://www.linkedin.com/in/jasperbailey"
          definition={faLinkedin}
          size="2xl"
        />
      </li>
    </ul>
  );
};

export default Socials;
