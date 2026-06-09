import { Navbar, Hero, Projects, About, Contact, Footer } from "./imports";
const Home = () => {
  return (
    <div>
      <div className="selection-emerald">
        <Navbar />
        <Hero />
        <Projects limit={3} />
        <About />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
