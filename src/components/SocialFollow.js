import React from "react";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faDiscord,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//TODO Here we have to add our links to Social Media platforms

export default function SocialFollow() {
  return (
    <div className="social-container">
      <a href="http://google.com" className="FB">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a href="http://google.com" className="IG">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
      <a href="http://google.com" className="Twitter">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a href="http://google.com" className="Discord">
        <FontAwesomeIcon icon={faDiscord} size="2x" />
      </a>
      <a href="http://google.com" className="Github">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
    </div>
  );
}
