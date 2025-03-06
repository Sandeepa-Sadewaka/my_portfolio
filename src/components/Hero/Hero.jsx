import React, { useState, useEffect } from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      {/* Content Section */}
      <div className={styles.content}>
        <h1 className={styles.title}>I'm Sandeepa Sadewaka</h1>
        <p className={styles.description}>
          I am a software engineering undergraduate with a strong foundation in mobile app development. 
          Skilled in Flutter, Dart, UI/UX design, state management, and backend development with Node.js and Firebase.
        </p>
        <div className={styles.buttons}>
          <a href="mailto:sadewakasandeepa39@gmail.com" className={styles.contactBtn}>
            Contact Me
          </a>
          <a
            href="https://drive.google.com/file/d/1Kqb3uCdat3MeZQV3tGhdOxcUVj47Tb_4/view?usp=drive_link"
            download="SandeepaSadewakaCV.pdf"
            className={styles.contactBtn}
          >
            Download CV
          </a>
        </div>
      </div>

      {/* Profile Image */}
      <img
        height="350px"
        width="350px"
        src={"assets/hero/heroImage.png"}
        alt="My image"
        className={styles.heroImg}
      />

      {/* Background Effects */}
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};