import "./App.css";
import Header from "./Header/Header";
import Landing from "./Landing/Landing";
import Section from "./Section/Section";
import Footer from "./Footer/Footer";

function App() {
  return (
    <>
      <div className="main-layout-content">
        <div><Header/></div>
        <div><Landing/></div>
        <div><Section/></div>
        <div><Footer/></div>
      </div>
    </>
  );
}

export default App;
