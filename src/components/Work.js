import React from "react";
import Typical from "react-typical";

export default function Work() {
  return (
    <div className="container">
      {/* <h1>Work</h1> */}
      <h1>
          {/* My Skills */}
          <Typical loop={1} wrapper="b" steps={[" ", 1000, "Work"]} />
      </h1>
    </div>
  );
}
