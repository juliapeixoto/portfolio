import { Link, Router } from "react-router-dom";
import "./style.scss";

export default function Buttons() {
  return (
    <>
      <button className="buttons__button buttons--green">RESUME</button>
      <button
        onClick={() => window.open("https://github.com/juliapeixoto")}
        className="buttons__button"
      >
        PROJECTS
      </button>
    </>
  );
}
