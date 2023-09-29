import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";
import { faPinterest } from "@fortawesome/free-brands-svg-icons/faPinterest";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export function Header() {
  return (
    <div id="header" className="grid grid-cols-3 content-center mx-12">
      <div className="image-container">
        <Image
          src="/assets/MyEndlessAdventuresLogo.jpg"
          alt="Logo"
          width={5}
          height={5}
        />
      </div>
      <div className="flex flex-row gap-x-32 align-middle justify-center">
        <a>Bestemming</a>
        <a>Reistips</a>
        <a>Samenwerking</a>
        <a>Contact</a>
      </div>
      <div className="flex flex-row gap-x-3 justify-end">
        <FontAwesomeIcon icon={faFacebook} />
        <FontAwesomeIcon icon={faInstagram} />
        <FontAwesomeIcon icon={faPinterest} />
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </div>
    </div>
  );
}
