import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";
import { faPinterest } from "@fortawesome/free-brands-svg-icons/faPinterest";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Footer() {
  return (
    <div id="footer" className="grid grid-cols-3 content-center mx-12">
      <div>
        <FontAwesomeIcon icon={faCopyright} />
        2023 - My Endless Adventures. All Rights Reserved.
      </div>
      <div className="flex flex-row gap-x-32 align-middle justify-center">
        <a id="links">Contact</a>
        <a id="links">Samenwerken</a>
        <a id="links">Disclaimer</a>
        <a id="links">Privacy</a>
      </div>
      <div className="flex flex-row gap-x-3 justify-end">
        <a href="https://www.facebook.com">
          <FontAwesomeIcon size="lg" icon={faFacebook} />
        </a>
        <a href="https://www.facebook.com">
          <FontAwesomeIcon size="lg" icon={faInstagram} />
        </a>
        <a href="https://www.facebook.com">
          <FontAwesomeIcon size="lg" icon={faPinterest} />
        </a>
      </div>
    </div>
  );
}
