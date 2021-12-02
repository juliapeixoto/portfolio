import "./App.css";
import Abstract from "./components/Abstract";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <div className="app__background" />
      <Header />
      <div className="app__inner">
        <div className="app__card">
          <Card />
        </div>
        <Abstract />
      </div>
      <div className="app__footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
