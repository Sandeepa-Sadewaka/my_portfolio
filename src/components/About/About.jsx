import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";
import.meta.url 

const aboutData = [
  {
    imgSrc: "assets/about/frontend.png",
    alt: "Frontend development icon",
    title: "Frontend Developer",
    description:
      "I have experience in building responsive and optimized web and mobile applications.",
    skills: "Flutter, Dart, React.js, HTML, CSS, JavaScript",
  },
  {
    imgSrc: "assets/about/server.png",
    alt: "Backend development icon",
    title: "Backend Developer",
    description:
      "I have experience developing fast and optimized back-end systems and APIs.",
    skills: "Node.js, Firebase, MySQL, REST APIs, authentication, database management",
  },
  {
    imgSrc: "assets/about/ui.png",
    alt: "UI/UX design icon",
    title: "UI/UX Designer",
    description:
      "I have experience designing user-friendly interfaces and creating reusable design systems.",
    skills: "Figma, responsive design",
  },
  {
    imgSrc: "assets/about/cursor.png",
    alt: "Other skills icon",
    title: "Other Skills",
    description:
      "I have a strong foundation in IT project management and version control, ensuring smooth development workflows.",
    skills: "Git/GitHub",
  },
];

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.content}>
        {/* About Items */}
        <ul className={styles.aboutItems}>
          {aboutData.map((item, index) => (
            <li key={index} className={styles.aboutItem}>
              <img src={item.imgSrc} alt={item.alt} />
              <div className={styles.aboutItemText}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <p><strong>Skills:</strong> {item.skills}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
