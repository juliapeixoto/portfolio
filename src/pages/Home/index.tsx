import Abstract from "../../components/Abstract";
import Card from "../../components/Card";
import Footer from "../../components/Footer";
import "./style.scss";

function Home() {
  return (
    <div className="home">
      <div className="home__background__web" />
      <div className="home__inner">
        <div className="home__card">
          <Card />
        </div>
        <div className="home__background__mobile">
          <Abstract />
        </div>
      </div>
      <div className="home__footer">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
