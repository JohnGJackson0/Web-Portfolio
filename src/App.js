import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/AboutMe";
import Services from "./components/Services/Services";
import Portfolio from "./components/Portfolio/Portfolio";
import Footer from "./components/Footer";
import ContactMe from "./components/ContactMe";
import { Articles } from "./components/Articles";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Articles />
      <Services />
      <Portfolio />
      <ContactMe />
      <Footer />
    </>
  );
}

export default App;
