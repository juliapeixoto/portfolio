import icGithub from "../../assets/svg/ic_github.svg";
import icLinkedin from "../../assets/svg/ic_linkedin.svg";
import "./style.scss";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__inner">
        <div className="footer__info">
          <h1 className="footer__label">Call</h1>
          <span className="footer__text">(19)99404-9650</span>
        </div>
        <div className="footer__info">
          <h1 className="footer__label">Write</h1>
          <span className="footer__text">peixotojuliacontato@gmail.com</span>
        </div>
        <div className="footer__info">
          <h1 className="footer__label">Follow</h1>
          <div className="footer__container-links">
            <a
              className="footer__link"
              href="https://github.com/juliapeixoto"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                className="footer__link__img"
                src={icGithub}
                alt="Ícone GitHub"
              />
            </a>
            <a
              className="footer__link"
              href="https://www.linkedin.com/in/j%C3%BAlia-peixoto-3a06581a7"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                className="footer__link__img"
                src={icLinkedin}
                alt="Ícone Linkedin"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="footer__credits">
        <p className="footer__text">© 2021 by Júlia Peixoto</p>
        <p className="footer__text">Template created with Wix.com</p>
      </div>
    </div>
  );
}
