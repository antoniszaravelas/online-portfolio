import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFlickr } from "@fortawesome/free-brands-svg-icons";
import { useRef } from "react";
import emailjs from "@emailjs/browser";


const Contact = () => {


    const form = useRef();




    const handleSubmit = (e) => {
      e.preventDefault();
      
      emailjs.sendForm('service_gvw12tr', 'template_i01l4k3', form.current, 'FWHFNHaxRHIBNJEQ2')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
    }


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
              <a href="https://www.flickr.com/photos/191063934@N02/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFlickr} size="3x"/></a>
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
          <form ref={form} onSubmit={handleSubmit}>
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
            <button type="submit" className="submit-btn">Send</button>  
          </form>
        </div>
      </div>
    </section>
    </div>
     );
}
 
export default Contact;