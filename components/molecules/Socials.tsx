import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Socials = () => {
  return (
    <ul className="flex flex-row mt-12">
      <li className="mr-5">
        <a href="https://www.github.com/jasperBailey">
          <FontAwesomeIcon
            icon={faGithub}
            size="2xl"
            style={{ color: "#E2E8F0" }}
          />
        </a>
      </li>
      <li className="mr-5">
        <a href="mailto:jasperbailey98@gmail.com">
          <FontAwesomeIcon
            icon={faEnvelope}
            size="2xl"
            style={{ color: "#E2E8F0" }}
          />
        </a>
      </li>
      <li className="mr-5">
        <a href="https://www.linkedin.com/in/jasperbailey">
          <FontAwesomeIcon
            icon={faLinkedin}
            size="2xl"
            style={{ color: "#E2E8F0" }}
          />
        </a>
      </li>
    </ul>
  );
};

export default Socials;
