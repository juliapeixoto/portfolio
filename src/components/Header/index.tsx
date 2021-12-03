import "./style.scss";

export default function Header() {
  return (
    <div className="header">
      <div className="header__info">
        <div className="header__container">
          <div className="header__square" />
          <p className="header__title">Júlia Peixoto</p>
        </div>
        <span className="header__text__divider">/</span>
        <span className="header__subtitle">SOFTWARE ENGINEER</span>
      </div>

      <div className="header__links">
        <a href="/" className="header__links__text">
          ABOUT ME
        </a>
        <a href="/resume" className="header__links__text">
          RESUME
        </a>
      </div>
    </div>
  );
}
