import {useState} from "react";
import Cursor from "./components/Cursor";
import {BrowserRouter as Router, Routes, Route, Link,HashRouter} from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Work from "./components/Work";

function App() {

  const [boo,setBoo] = useState(false);


  const handleClick = () => {
     setBoo(!boo)
  }   


 
  

  return (
    <>
      {/* <Router> */}
        <div className={boo? "nav-open": "nothing"}>
          <div className="container">
            <button onClick={handleClick} className="nav-toggle" aria-label="toggle-navigation"><span className="hamburger" /></button>

            {/* navbar for phones */}
            <div className="nav">
              <div className="choose nav__list">
                <div className="nav__item"><Link onClick={handleClick} to="/"  className="nav__link"> Home </Link></div>
                <div className="nav__item"><Link onClick={handleClick} to="/about"  className="nav__link"> About </Link></div>
                <div className="nav__item"><Link onClick={handleClick} to="/work" className="nav__link">Work</Link></div>
                <div className="nav__item"><Link onClick={handleClick} to="/contact" className="nav__link">Contact</Link></div>
              </div>
            </div>
            
            <Nav/>
            <HashRouter basename={window.location.pathname || ""}>
              <Routes>
                <Route path="/online-portfolio" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/work" element={<Work/>}/>
              </Routes>
            </HashRouter>
          </div>
        </div>
        <Cursor/>
  
    {/* </Router> */}
  </>
  );
}

export default App;