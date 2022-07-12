import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Team from "./components/Team";
import JoinComunity from "./components/JoinComunity";
import "./css/story__team.css";
import OurStory from "./components/OurStory";
import WhitlistArea from "./components/WhitlistArea";
import RoadMap from "./components/RoadMap";
import TheDevelopment from "./components/TheDevelopment";
import Faqs from "./components/Faqs";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="App">
        {/* banner */}
        <div className="banner">
          <Nav bgImg="linear-gradient(rgba(0, 0, 0, 0.475), rgba(0, 0, 0, 0.091)), url(/Assets/bg.jpg)" />
          <img src="/Assets/bg.jpg" alt="" />
        </div>
        {/* banner  end*/}
        <WhitlistArea />
        <OurStory />
        <RoadMap />
        <TheDevelopment />
        <JoinComunity />
        <Team />
        <Faqs />
        <Footer />
      </div>
    </>
  );
}

export default App;
