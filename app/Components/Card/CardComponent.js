"use client";

import { useEffect, useState } from "react";
import styles from "./Card.module.css";

export default function CardComponent({
  data,
  type,
  deleteTask,
  editTaskById,
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const deleteTaskById = (id) => {
    deleteTask(id);
    setIsMenuOpen(false);
  };

  return (
    <div className={styles.inner_column}>
      <div className={styles.card}>
        <div className={styles.title_area}>
          <div className={styles.title}>ID - 1</div>
          <div className={styles.priority}>
            <div
              className={
                data.priority == 1
                  ? styles.low_dot
                  : data.priority == 2
                    ? styles.medium_dot
                    : styles.priority_dot
              }
            ></div>
            <div
              className={
                data.priority == 1
                  ? styles.low_text
                  : data.priority == 2
                    ? styles.medium_text
                    : styles.priority_text
              }
            >
              {data.priority == 1
                ? "LOW"
                : data.priority == 2
                  ? "MEDIUM"
                  : "HIGH"}
            </div>
          </div>
        </div>

        <div className={styles.card_title}>{data?.title}</div>
        <div className={styles.card_desc}>{data?.desc}</div>

        <div className="mt-5 flex justify-between relative">
          {" "}
          <div className="flex">
            <div
              onClick={() => editTaskById(data.id)}
              className="text-[#0002ff] mr-2 text-sm cursor-pointer"
            >
              Edit
            </div>
            <div className="text-[#d4d4d4] text-sm">|</div>
            <div
              className="text-[#ff0000] ml-2 text-sm cursor-pointer"
              onClick={() => deleteTaskById(data.id)}
            >
              Delete
            </div>
          </div>
          <div className="relative">
            <div
              className="menu cursor-pointer"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <img src={"/menu.png"} width="20px" alt="menu" />
            </div>

            {isMenuOpen && (
              <div className="absolute right-0 bottom-8 w-32 bg-white rounded shadow-lg z-10 p-2">
                <ul className="text-sm">
                  <li
                    className="p-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      setIsMenuOpen(false);
                    }}
                  >
                    Move to Backlog
                  </li>
                  <li
                    className="p-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      setIsMenuOpen(false);
                    }}
                  >
                    Move to Todo
                  </li>
                  <li
                    className="p-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      setIsMenuOpen(false);
                    }}
                  >
                    Move to In Progress
                  </li>
                  <li
                    className="p-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      setIsMenuOpen(false);
                    }}
                  >
                    Move to Done
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
