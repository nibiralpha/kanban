"use client";

import styles from "./Card.module.css";

export default function CardComponent(data, type) {
  // console.log(data);

  const getPriorityColor = (data) => {};

  return (
    <div className={styles.inner_column}>
      <div className={styles.card}>
        <div className={styles.title_area}>
          <div className={styles.title}>ID - 01</div>
          <div className={styles.priority}>
            <div
              className={
                data.data.priority == 1
                  ? styles.low_dot
                  : data.data.priority == 2
                    ? styles.medium_dot
                    : styles.priority_dot
              }
            ></div>
            <div
              className={
                data.data.priority == 1
                  ? styles.low_text
                  : data.data.priority == 2
                    ? styles.medium_text
                    : styles.priority_text
              }
            >
              {data.data.priority == 1
                ? "LOW"
                : data.data.priority == 2
                  ? "MEDIUM"
                  : "HIGH"}
            </div>
          </div>
        </div>
        <div className={styles.card_title}>{data?.data?.title}</div>
        <div className={styles.card_desc}>{data?.data?.desc}</div>
      </div>
    </div>
  );
}
