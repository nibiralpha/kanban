"use client";

import styles from "./Card.module.css";

export default function CardComponent(data, type) {

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

        <div className="mt-5 flex">
          <div className="text-[#0002ff] mr-2 text-sm">Edit</div>
          <div className="text-[#d4d4d4] text-sm">|</div>
          <div className="text-[#ff0000] ml-2 text-sm">Delete</div>
        </div>
      </div>
    </div>
  );
}
