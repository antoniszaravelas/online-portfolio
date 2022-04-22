import { Card } from 'react-bootstrap'
import { motion } from 'framer-motion'

const Project = ({ projectData }) => {
    return(
        <div className="card">
            <div className='title'>{projectData.projectName}</div>
            <motion.div
                whileHover={{
                scale: 1.2,
                transition: { duration: .5 },
                originX: 0
                }}
                whileTap={{ scale: 0.9 }}
                >
                <img src={projectData.imgLink}/>
            </motion.div>
            <div className="card_body">
                        <p >{projectData.infoText}</p>
                        <p>Technologies used:{projectData.technologiesUsed}</p>
                        <a rel='noopener noreferrer' target='_blank' href={projectData.websiteLink}>demo</a>
                        <a rel='noopener noreferrer' target='_blank' href={projectData.gitHubLink} >code</a>
            </div>
        </div>
    )
}
export default Project