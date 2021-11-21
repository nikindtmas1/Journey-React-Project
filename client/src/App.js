
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navigation from "./components/Navigation/Navigation";
import Places from "./components/Places/Places";
import Destination from "./components/TopDestination/TopDestination";

function App() {
  return (
    <div className="tm-main-content" id="top">
      <div className="tm-top-bar-bg"></div>
      <Navigation />

      <div className="tm-page-wrap mx-auto">
        <Home />
        <Destination />
        <Places />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
