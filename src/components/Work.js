import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import Project from '../components/Project'
import { motion } from 'framer-motion'
import myProjects from "../data/myProjects";

const Work = () => {

    const displayProjects = myProjects.map((project, id)=> {
        return (
              <Project projectData={myProjects[id]}></Project>
        )
    })

    return (
        <>
        <div className="about" id="about">
        <div className="typewriter">
        <h1 id="about_h1">My Work</h1>
    </div>
        <div>
          <div className=' container-work'>
            <motion.div 
            initial={{scaleY: 0}} 
            animate={{scaleY:1}} 
            exit={{scaleY:0}}
            transition={{duration: 0.5}}>
    
            
            {displayProjects}
            
            
            </motion.div>
            </div>
        </div>
        </div>
        </>
      )
}
 
export default Work;