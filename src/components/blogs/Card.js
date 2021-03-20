import React from "react";
import styles from "../../../styles/Blogs.module.css";

export default function Card(props) {
  return (
    <a href={props.blog.link}>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.imgWrapper}>
            <img src={"/assets/images/blogs/sassfarfromdead.jpg"} />
          </div>
          <div>
            <p className={styles.header}>
              <span className={styles.title}>{props.blog.title}</span>
              <small className={styles.date}>{props.blog.date}</small>
            </p>
            <p className={styles.content}>
              I’ve seen many advanced React users make a claim against the
              preprocessor that state that styled components are the next big
              thing for styling your sheets.
            </p>
          </div>
        </div>
      </div>
    </a>
  );
}