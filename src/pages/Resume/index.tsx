import Experience from "../../components/Experience";
import Footer from "../../components/Footer";
import "./style.scss";

export default function Resume() {
  return (
    <div className="resume">
      <div className="resume__container__title">
        <div className="resume__square" />
        <span className="resume__title">Resume</span>
      </div>

      <div className="resume__container__subtitle">
        <span className="resume__subtitle">Experience</span>
        <button className="resume__button">DOWNLOAD CV</button>
      </div>

      <div className="resume__experience">
        <Experience
          start="2021"
          end="Present"
          name="INTERN"
          subtitle="CI&T"
          description="I'm a paragraph. Click here to add your own text
        and edit me. It’s easy.Just click “Edit Text” or double click
        me to add your own content and make changes to the font."
        />
      </div>

      <div className="resume__container__subtitle">
        <span className="resume__subtitle">Education</span>
      </div>

      <div className="resume__experience">
        <Experience
          start="2018"
          end="2021"
          name="PUC-Campinas"
          subtitle="Graduation"
          description="I'm a paragraph. Click here to add your own text
        and edit me. It’s easy.Just click “Edit Text” or double click
        me to add your own content and make changes to the font."
        />
      </div>
      <div className="resume__footer">
        <Footer />
      </div>
    </div>
  );
}
