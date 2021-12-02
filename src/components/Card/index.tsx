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
        <img className="card__link" src={icGithub} alt="Ícone GitHub" />
        <img className="card__link" src={icLinkedin} alt="Ícone Linkedin" />
      </div>
    </div>
  );
}
