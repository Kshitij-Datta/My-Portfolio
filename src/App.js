import "./App.css";
import {
  Navbar,
  Hero,
  Projects,
  About,
  Contact,
  Footer,
} from "./Components/imports";

function App() {
  return (
    <>
      <div className="selection-emerald">
        <Navbar />
        <Hero />
        <Projects />
        <About />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
