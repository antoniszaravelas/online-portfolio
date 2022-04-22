import {motion} from "framer-motion";
import { Link } from "react-router-dom";

const Home = () => {
  
    return ( 
        <>
        <div className="header">
            <motion.div
            initial={{scaleY: 0}} 
            animate={{scaleY:1}} 
            exit={{scaleY:0}}
            transition={{duration: 1}}
            className="main_change">
            <div className="typewriter">
            <h1> Hello, </h1>
            </div>
            
            <span>I am <span className="a-letter">α</span><span id="keep">ntonis,</span></span>
            
            <div>a web developer</div>
            </motion.div>

            <div id="contact_div">
            <Link
                className="contact" 
                id="projects"
                to="/work"
                whileHover="hover"> check out projects!
            </Link>
            </div>
        </div>
        </>
     );
}
 
export default Home;