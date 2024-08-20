import React, { useState } from 'react';
import styles from "./Skills.module.css";
import skills from "../../data/skills.json";
import { getImageUrl } from "../../utils";
import { hexToRgb } from '../../utils';

export const Skills = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id='skills' className={styles.container}>
        <h2 className={styles.title}>Skills</h2>
        <div className={styles.gridContainer}>
            {skills.map((skillItem, id) => {
                const isHovered = hoveredIndex === id;
                return (
                    <div 
                        key={id} 
                        className={styles.skillItem}
                        onMouseEnter={() => setHoveredIndex(id)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <div className={styles.imgdiv}>
                        <img src={getImageUrl(skillItem.imageSrc)} alt={`${skillItem.title} Image`}/>
                        </div>
                        <div className={styles.skillItemInfo}>
                            <h3>{skillItem.title}</h3>
                            <div className={styles.progressBarBackground}>
                                <div 
                                    className={styles.progressBar} 
                                    style={{ 
                                    width: `${skillItem.progress}%`, 
                                    backgroundColor: `#${skillItem.colour}`,
                                    boxShadow: isHovered ? `0 0 8px ${hexToRgb(skillItem.colour)}` : 'none'
                                    }}
                                >
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    </section>
  )
}
