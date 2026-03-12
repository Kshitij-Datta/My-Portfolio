import "./App.css";
import {
  Navbar,
  Hero,
  Projects,
  About,
  Contact,
  Footer,
} from "./Components/imports";
import { Analytics } from "@vercel/analytics/react";

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
      <Analytics />
    </>
  );
}

export default App;
