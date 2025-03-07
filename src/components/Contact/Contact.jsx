import React from "react";
import { motion } from "framer-motion"; // Add animation package

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <motion.div
        className={styles.text}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </motion.div>
      <motion.ul
        className={styles.links}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <li className={styles.link}>
            <a href="mailto:sadewakasandeepa39@gmail.com">
            <motion.img
            src={"assets/contact/emailIcon.png"}
            alt="Email icon"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          /></a>
          <a href="mailto:sadewakasandeepa39@gmail.com">email</a>
        </li>
        <li className={styles.link}>
          <a href="https://www.linkedin.com/in/sandeepa-nadeeshan-32384b311/">
          <motion.img
            src={"assets/contact/linkedinIcon.png"}
            alt="LinkedIn icon"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          />
          </a>
          <a href="https://www.linkedin.com/in/sandeepa-nadeeshan-32384b311/">linkedin</a>
        </li>
        <li className={styles.link}>
          <a href="https://github.com/Sandeepa-Sadewaka">
          <motion.img
            src={"assets/contact/githubIcon.png"}
            alt="Github icon"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          />
          </a>
          <a href="https://github.com/Sandeepa-Sadewaka">github</a>
        </li>
      </motion.ul>
    </footer>
  );
};
