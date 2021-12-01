import "./style.scss";

export default function Header() {
  return (
    <div className="header">
      <div className="header__info">
        <div className="header__container">
          <div className="header__square" />
          <p className="header__title">Júlia Peixoto</p>
        </div>
        <span className="header__subtitle">SOFTWARE ENGINEER</span>
      </div>
    </div>
  );
}
