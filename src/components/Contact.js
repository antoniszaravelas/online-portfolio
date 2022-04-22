import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCodepen } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";


const Contact = () => {
    return ( 
      <div className="about" id="about">
      <div className="typewriter">
        <h1 id="about_h1">Contact Me!</h1>
      </div>
      <section id="contact">
     
      <div className="contact-box">
        <div className="contact-links">
          <div className="links">
            <motion.div className="link"
              initial={{x:"-100vw"}}
              animate={{x:0}}
              transition={{delay:1, type:"spring", stiffness:120}}
            >
              <a href="https://www.linkedin.com/in/antonios-zaravelas-569749224/" target="_blank"><FontAwesomeIcon icon={faLinkedin} size="3x"/></a>
            </motion.div>
            <motion.div className="link"
             initial={{x:"-100vw"}}
             animate={{x:0}}
             transition={{delay:1.4, type:"spring", stiffness:120}}>
              <a href="https://www.github.com/AntonisZaravelas?tab=repositories" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} size="3x"/></a>
            </motion.div>
    
            <motion.div className="link"
             initial={{x:"-100vw"}}
             animate={{x:0}}
             transition={{delay:1.8, type:"spring", stiffness:120}}>
              <a href="mailto:zaravelasant@icloud.com" rel="noreferrer"><FontAwesomeIcon icon={faEnvelope} size="3x"/></a>
            </motion.div>

            <motion.div className="link"
             initial={{x:"-100vw"}}
             animate={{x:0}}
             transition={{delay:2.2, type:"spring", stiffness:120}}>
              <a href="tel:+4917630122864" rel="noreferrer"><FontAwesomeIcon icon={faPhone} size="3x"/></a>
            </motion.div>
          </div>
        </div>
        <div className="contact-form-wrapper">
          <form>
            <div className="form-item">
              <input type="text" name="sender" required />
              <label>Name:</label>
            </div>
            <div className="form-item">
              <input type="text" name="email" required />
              <label>Email:</label>
            </div>
            <div className="form-item">
              <textarea className name="message" required defaultValue={""} />
              <label>Message:</label>
            </div>
            <button className="submit-btn">Send</button>  
          </form>
        </div>
      </div>
    </section>
    </div>
     );
}
 
export default Contact;