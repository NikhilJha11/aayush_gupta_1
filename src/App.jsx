import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  Footer,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="relative z-20 bg-no-repeat bg-center">
          <Navbar />
          <Hero />
          <StarsCanvas />
          
        </div>
        <div className="relative z-0">
          <About />
          
        </div>
        <div className="relative z-0">
          <Experience />
          
        </div>
        <div className="relative z-0">
          <Tech />
          <Works />
          <StarsCanvas />
          
        </div>
        <div className="relative z-0">
          <Feedbacks />
          
        </div>
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
          
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
