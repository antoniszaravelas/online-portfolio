import me from "../images/me.jpg";
import me2 from "../images/me2.png";
import CV from "../CV_Zaravelas.pdf";
import { motion } from "framer-motion";

const About = () => {
    const containerVariants = {
        hidden: { 
          opacity: 0, 
        },
        visible: { 
          opacity: 1, 
          transition: { delay: 1.5, duration: 1.5 }
        }
       
      };

    return ( 
       <>
        <div className="about" id="about">
            <div className="typewriter">
                <h1 id="about_h1">About Me</h1>
            </div>
            <div className="container_about">
                <motion.img src={me2} alt="me dancing hehe"
                 variants={containerVariants}
                 initial="hidden"
                 animate="visible"
                 >

                 </motion.img>
                <motion.div className="technologies"
                  initial = {{x:"100vw"}}
                  animate = {{x: 0}}
                  transition = {{delay:2.5, type:"spring", stiffness:120}}
                >
                <h3>Technologies</h3>
                <p>HTML</p>
                <p>JavaScript</p>
                <p>TypeScript</p>
                <p>React</p>
                <p>MongoDB</p>
                <p>Express</p>
                <p>NodeJS</p>
                <p>CSS</p>
                <p>SCSS</p>
                <p>Bootstrap</p>
                <p>Heroku - Figma - Netlify</p>
                </motion.div>

                <motion.div class="button_container"
                     initial = {{x:"-100vw"}}
                     animate = {{x: 0}}
                     transition = {{delay:2.5, type:"spring", stiffness:120}}
                >
                <a href={CV} download>
                    <button class="myButton" data-label="CV"></button>
                </a>
                </motion.div>
            </div>
        </div>
    </>
     );
}
 
export default About;