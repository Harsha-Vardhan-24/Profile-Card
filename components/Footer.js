import React from "react";
import {
  FaGithubSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaTwitterSquare
} from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-items">
        <FaGithubSquare />
        <FaLinkedin />
        <FaTwitterSquare />
        <FaInstagramSquare />
      </div>
    </div>
  );
}

export default Footer;
