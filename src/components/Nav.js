import { Link } from "react-router-dom";

const Nav = () => {
  return ( 
    <>
      <menu>
        <div className="name">
          <Link to="/online-portfolio">
            <div>α</div>
            <div>antonis</div>
            <p>Web Developer</p>
          </Link>
        </div>
        <div className="choose">
          <div><Link to="/about">About</Link></div>
          <div><Link to="/work">Work</Link></div>
          <div><Link to="/contact">Contact</Link></div>
        </div>
        <div className="media">
          <a href="https://www.linkedin.com/in/antonios-zaravelas-569749224/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin" /></a>
          <a href="https://github.com/antoniszaravelas" target="_blank" rel="noreferrer"><i className="fab fa-github-square" /></a>
        </div>
      </menu>
    </>
    );
}
 
export default Nav;