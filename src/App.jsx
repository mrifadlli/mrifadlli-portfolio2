import {} from "react";
import {
  Home,
  Contact,
  Experience,
  Navbar,
  Portfolio,
  SocialLink,
  Footer,
} from "./Components/index";

const App = () => {
  return (
    <div className="h-screen">
      <Navbar />
      <Home />
      <SocialLink />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
