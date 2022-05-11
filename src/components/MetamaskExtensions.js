import React from "react";
import { faChrome, faFirefoxBrowser } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function MetamaskExtensions() {
  return (
    <div className="social-container">
      <a href="http://google.com" className="Chrome">
        <FontAwesomeIcon icon={faChrome} size="2x" />
      </a>
      <a href="http://google.com" className="Firefox">
        <FontAwesomeIcon icon={faFirefoxBrowser} size="2x" />
      </a>
    </div>
  );
}
