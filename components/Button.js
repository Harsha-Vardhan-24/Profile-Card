import React from "react";
import { HiMail } from "react-icons/hi";

function Button() {
  return (
    <div>
      <center>
        <button className="button">
          <HiMail className="mail-button" />
          Email
        </button>
      </center>
    </div>
  );
}

export default Button;
