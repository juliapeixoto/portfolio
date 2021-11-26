import "./App.css";
import Abstract from "./components/Abstract";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="restes">
        <Card />
      </div>
      <Abstract />
      <Footer />
    </div>
  );
}

export default App;
