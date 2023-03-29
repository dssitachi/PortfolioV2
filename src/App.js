import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Hero";
import Navbar from "./components/Navbar";
import Work from "./components/Work";
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <div className="bg-my-bg">
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Work />
      <Contact />
      <Analytics />
    </div>
  );
}

export default App;
