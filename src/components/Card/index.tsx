import icProfile from "../../assets/img/icon_profile.webp";
import icGithub from "../../assets/svg/ic_github.svg";
import icLinkedin from "../../assets/svg/ic_linkedin.svg";
import Buttons from "../Buttons";
import "./style.scss";

export default function Card() {
  return (
    <div className="card">
      <img
        className="card__profile__img"
        src={icProfile}
        alt="Foto de perfil"
      />
      <span className="card__name">Júlia Peixoto</span>
      <div className="card__divider" />

      <span className="card__course">SOFTWARE ENGINEER</span>

      <div className="card__buttons">
        <Buttons />
      </div>

      <div className="card__container__links">
        <a
          className="card__link"
          href="https://github.com/juliapeixoto"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img className="card__link__img" src={icGithub} alt="Ícone GitHub" />
        </a>
        <a
          className="card__link"
          href="https://www.linkedin.com/in/j%C3%BAlia-peixoto-3a06581a7"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img
            className="card__link__img"
            src={icLinkedin}
            alt="Ícone Linkedin"
          />
        </a>
      </div>
    </div>
  );
}
