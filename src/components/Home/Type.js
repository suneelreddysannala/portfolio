import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "SOFTWARE ENGINEER",
          "FREELANCER",
          "AI ENGINEER",
          "OPEN SOURCE CONTRIBUTOR",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
