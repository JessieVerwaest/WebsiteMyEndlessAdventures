import React from "react";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";
import { faPinterest } from "@fortawesome/free-brands-svg-icons/faPinterest";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SearchBar from "./searchBar";
import logo from "@/assets/MyEndlessAdventuresLogo.jpg";

export function Header() {
  return (
    <header
      id="header"
      className="flex flex-row justify-between w-full align-center px-12 py-6"
    >
      <div className="image-container">
        <img src={logo.src} alt="Logo" width={100} height={100} />
      </div>
      <div className="flex flex-row gap-x-32 align-middle justify-center">
        <a id="links">Bestemming</a>
        <a id="links">Reistips</a>
        <a id="links">Samenwerking</a>
        <a id="links">Contact</a>
      </div>
      <div className="flex flex-row gap-x-3 justify-end">
        <a href="https://www.facebook.com">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://www.facebook.com">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://www.facebook.com">
          <FontAwesomeIcon icon={faPinterest} />
        </a>
        {/*<div>
          <SearchBar/>
        </div>*/}
      </div>
    </header>
  );
}
