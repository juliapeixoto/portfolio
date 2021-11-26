import icGithub from "../../assets/svg/ic_github.svg";
import icLinkedin from "../../assets/svg/ic_linkedin.svg";
import "./style.scss";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__inner__info">
        <h1>Call</h1>
        <span>(19)99404-9650</span>
      </div>
      <div className="footer__inner__info">
        <h1>Write</h1>
        <span>peixotojuliacontato@gmail.com</span>
      </div>
      <div className="footer__inner__info">
        <h1>Follow</h1>
        <div className="footer__inner__info__icons">
          <img src={icGithub} alt="Ícone GitHub" />
          <img src={icLinkedin} alt="Ícone Linkedin" />
        </div>
      </div>
      <span>Template created with Wix.com</span>
    </div>
  );
}
