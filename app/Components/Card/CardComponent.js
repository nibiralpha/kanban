"use client";

import styles from "./Card.module.css";

export default function CardComponent() {
  return (
    <div className={styles.inner_column}>
      
      <div className={styles.card}>
        <div className={styles.title_area}>
          <div className={styles.title}>ID - 01</div>
          <div className={styles.priority}>
            <div className={styles.priority_dot}></div>
            <div className={styles.priority_text}>HIGH</div>
          </div>
        </div>
        <div className={styles.card_title}>Design & Development</div>
        <div className={styles.card_desc}>Impliment CRUD on users</div>
      </div>
    </div>
  );
}
