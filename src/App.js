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
      <HashRouter basename={window.location.pathname || ""}>
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

            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/work" element={<Work/>}/>
            </Routes>
            


          </div>
        </div>
        <Cursor/>
    </HashRouter>
  </>
  );
}

export default App;



{/* <a href="./CV_Zaravelas.pdf" download>
  <button><i className="fas fa-arrow-down" />Download my CV in PDF</button>
</a> */}





{/* 
 <div className="my-skills" id="my-skills">
          <h1>Skills</h1>
          <div className="skill-container">
            <p>HTML</p>
            <div className="containerX">
              <div className="skills html">90%</div>
            </div>
            <p>CSS</p>
            <div className="containerX">
              <div className="skills css">80%</div>
            </div>
            <p>SASS</p>
            <div className="containerX">
              <div className="skills sass">70%</div>
            </div>
            <p>JavaScript</p>
            <div className="containerX">
              <div className="skills js">70%</div>
            </div>
            <p>REACT</p>
            <div className="containerX">
              <div className="skills react">90%</div>
            </div>
            <p>PHP</p>
            <div className="containerX">
              <div className="skills php">30%</div>
            </div>
          </div>
        </div>
        




        <div className="work" id="work">
          <h1>Work </h1>
          <div className="work-container">
            <div className="box-work">
              <img src="../images/work/drums.jpeg" alt="drums" />
              <p>A really easy drum-simulation kind of app! The App was created with HTML, CSS, JS, REACT</p>
              <button><a target="_blank" href="https://github.com/AntonisZaravelas/DrumsApp">See more</a></button>
            </div>
            <div className="box-work">
              <img src="../images/work/tb-skeleton.gif" alt="skeleton" />
              <p>A skeleton-screen, when a website needs some time to fetch data. The App was created with HTML, CSS, JS, REACT</p>
              <button><a target="_blank" href="https://github.com/AntonisZaravelas/skeleton-screen.git">See more</a></button>
            </div>
            <div className="box-work">
              <img src="../images/work/portfolio.jpeg" alt="portfolio" />
              <p>Of course this Webpage, which is my online portfolio. The App was created with HTML, CSS, SASS, JS.</p>
              <button><a target="_blank" href="https://github.com/AntonisZaravelas/online-portfolio">See more</a></button>
            </div>
            <div className="box-work">
              <img src="../images/work/lock.gif" alt="lock" />
              <p>A simple login form, using HTML and CSS</p>
              <button><a target="_blank" href="https://github.com/FbW-E05-2/uib-data-form-login_2-AntonisZaravelas.git">See more</a></button>
            </div>
            <div className="box-work">
              <img src="../images/work/fill-color.gif" alt="fill in form" />
              <p>A really easy simple data form, using HTML and CSS</p>
              <button><a target="_blank" href="https://github.com/FbW-E05-2/uib_data_form_personal_data-AntonisZaravelas.git">See more</a></button>
            </div>
            <div className="box-work">
              <img src="../images/work/tenor.gif" alt="coming.." />
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem quis non et! Minima dolorum, iusto corporis sint rem officiis praesentium, voluptatem perferendis nisi nam laudantium ullam pariatur ut inventore nostrum!
              </p>
              <button><a href="#">See more</a></button>
            </div>
            <div className="box-work">
              <img src="../images/work/tenor.gif" alt="coming.." />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque quas ad error porro dolore, eligendi, illum dolorem nam, sint placeat officia cumque? Error ullam vitae ratione. Aliquid excepturi sit in.</p>
              <button><a href="#">See more</a></button>
            </div>
            <div className="box-work">
              <img src="../images/work/tenor.gif" alt="coming..." />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt adipisci molestiae soluta dolore culpa, esse qui veniam alias temporibus provident, dolorum maiores placeat quasi, ratione nisi tempora quidem ea?</p>
              <button><a href="#">See more</a></button>
            </div>
          </div>
        </div>




        <div className="contact-me-form" id="contact">
          <h1>Contact Me</h1>
          <p>Feel Free to Drop me a Line!</p>
          <div className="container-contact">
            <form>
              <h1>Contact Form:</h1>
              <div className="floater">
                <input className="form-control" type="text" id="name" autoComplete="off" required />
                <label htmlFor="name" className="floating-label">Name</label>
              </div>
              <div className="floater">
                <input className="form-control" id="email" type="email" autoComplete="off" required />
                <label htmlFor="email" className="floating-label">Email</label>
              </div>
              <div className="floater">
                <textarea className="form-control" name="txt" id="comments" cols={30} rows={10} autoComplete="off" defaultValue={""} />
                <label htmlFor="comments" className="floating-label">Comment:</label>
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    */}


          