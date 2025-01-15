import './App.css'
import {
  Route,
  Routes,
  useLocation
} from "react-router-dom";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Home } from './views/Home/Home.jsx';
import { AboutUs } from './views/AboutUs/AboutUs.jsx';
import { TheCats } from './views/TheCats/TheCats.jsx';
import { NavBar } from './components/NavBar/NavBar.jsx';
import { Footer } from './components/Footer/Footer.jsx';
import { ScrollToTop } from './scripts/ScrollToTop.jsx';

function App() {
  const location = useLocation();

  return (
    <>
        <ScrollToTop/>
        {/* <TransitionGroup>
          <CSSTransition
            key={location.key}
            classNames="fade"
            timeout={300}
          > */}
        <NavBar />
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="thecats" element={<TheCats />} />
        </Routes>
        <Footer />
          {/* </CSSTransition>
        </TransitionGroup> */}
        </>
  )
}

export default App
