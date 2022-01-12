// import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import MyJumbotron from "./components/MyJumbotron";

import MyFooter from "./components/MyFooter";
import AnAlert from "./components/AnAlert";
// import SingleBook from "./components/SingleBook";
import history from "./jsonData/history.json";

function App() {
  console.log("TEST");
  return (
    <div className="App">
      <Navbar />
      <AnAlert text="I am an Alert !!!" />
      <MyJumbotron />
      {/* <SingleBook book={history[7]} /> */}
      <Home card={history} />
      <MyFooter />
    </div>
  );
}

export default App;
