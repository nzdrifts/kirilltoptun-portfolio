import React from 'react';

import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";
import {motion, useMotionValue, useSpring, useTransform } from "framer-motion"


export const ProjectCard = ({project: {title, imageSrc, description, skills, gitLink},}) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(
        mouseYSpring,
        [-0.5, 0.5],
        ["17.5deg", "-17.5deg"]
    )
    const rotateY = useTransform(
        mouseXSpring,
        [-0.5, 0.5],
        ["-17.5deg", "17.5deg"]
    )
    
    const handleMouseMove = (e) => {
    
        const rect = e.target.getBoundingClientRect();
        
        const width = rect.width;
        const height = rect.height;
    
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
    
        const xPct = mouseX/width-0.5;
        const yPct = mouseY/height-0.5;
    
        x.set(xPct);
        y.set(yPct);
    }
    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    }
  return (
    <motion.div 
    onMouseMove={handleMouseMove}
    onMouseLeave={handleMouseLeave}
    style={{rotateX,rotateY,transformStyle: "preserve-3d",}}
    className={styles.container}>
        <div
            style={{
            transform: "translateZ(35px)",
            transformStyle: "preserver-3d",
            }}
            className={styles.container2}
        >
            <img 
            className={styles.image}
            src={getImageUrl(imageSrc)} 
            alt={`${title} image`}/>
            <h3 className={styles.projectTitle}>{title}</h3>
            <p className={styles.projectDescription}>{description}</p>
            <ul className={styles.skillsList}>
                {skills.map((skill, id) => {
                    return (
                        <p className={styles.projectSkills}>{skill}</p>
                    )
                })}
            </ul>
        </div>
    </motion.div>
  )
}
