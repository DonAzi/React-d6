// import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

import MyFooter from "./components/MyFooter";
import AnAlert from "./components/AnAlert";
import MyBadge from "./components/MyBadge";
import SingleBook from "./components/SingleBook";
import history from "./jsonData/history.json";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AnAlert text="I am an Alert !!!" />
      <SingleBook book={history[7]} />
      <MyBadge text="Im a badge" color={"info"} />
      <Home card={history} />
      <MyFooter />
    </div>
  );
}

export default App;
