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
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="aboutus" element={<AboutUs />} />
              <Route path="thecats" element={<TheCats />} />
            </Routes>
          {/* </CSSTransition>
        </TransitionGroup> */}
        </>
  )
}

export default App
