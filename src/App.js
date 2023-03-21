import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Hero";
import Navbar from "./components/Navbar";
import Work from "./components/Work";

function App() {
  return (
    <div className="bg-my-bg">
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
