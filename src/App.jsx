import { BrowserRouter } from "react-router-dom";

import { Hero, Navbar } from './components';
//import { About, Contact, Experience, Feedbacks, Hero, NavBar, Tech, Works, StarsCanvas} from './components';

const App = () => {

  return (
    <BrowserRouter>
    asdfasd
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
