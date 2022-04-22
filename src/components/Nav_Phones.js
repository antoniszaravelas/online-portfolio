import { Link } from "react-router-dom";
import { useState } from "react";

const Nav_Phones = () => {

  const [boo,setBoo] = useState(true);

  const handleClick = () => {
    setBoo(!boo)
 }  
    return ( 
        <>
        <div className="nav">
          <div className="choose nav__list">
            <div className="nav__item"><Link onClick={handleClick} to="/"  className="nav__link"> Home </Link></div>
            <div className="nav__item"><Link onClick={handleClick} to="/about"  className="nav__link"> About </Link></div>
            <div className="nav__item"><Link onClick={handleClick} to="/my-skills" className="nav__link">My Skills</Link></div>
            <div className="nav__item"><Link onClick={handleClick} to="/work" className="nav__link">Work</Link></div>
            <div className="nav__item"><Link onClick={handleClick} to="/contact" className="nav__link">Contact</Link></div>
          </div>
        </div>
    </>
     );
}
 
export default Nav_Phones;