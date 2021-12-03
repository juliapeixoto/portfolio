import Buttons from "../Buttons";
import "./style.scss";

export default function Abstract() {
  return (
    <div className="abstract">
      <h1 className="abstract__title">Hello</h1>
      <span className="abstract__subtitle">
        Here's who I am {`&`} what I do
      </span>
      <div className="abstract__buttons">
        <Buttons />
      </div>
      <p className="abstract__text">
        I'm 21 years old and graduated in Software Engineering, at PUC-Campinas.
        Currently working as a intern at CI{`&`}T.
      </p>
      <p className="abstract__text">
        I'm very dedicated in everything I do and I always try to help others as
        much as I can.
      </p>
    </div>
  );
}
