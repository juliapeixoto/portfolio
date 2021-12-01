import "./style.scss";

export default function Abstract() {
  return (
    <div className="abstract">
      <div className="abstract__inner">
        <h1 className="abstract__title">Hello</h1>
        <span className="abstract__subtitle">Subtitulo pequeuinids</span>
        <p className="abstract__text">
          I'm a paragraph. Click here to add your own text and edit me. It’s
          easy. Just click “Edit Text” or double click me to add your own
          content and make changes to the font.
        </p>
        <p className="abstract__text">
          I’m a great place for you to tell a story and let your users know a
          little more about you.
        </p>
      </div>
    </div>
  );
}
