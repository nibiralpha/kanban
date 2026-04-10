"use client";
import { useState, useEffect } from "react";

import CardComponent from "./Components/Card/CardComponent";
import PopupComponent from "./Components/Popup/PopupComponent";

export default function Home() {
  let [isOpen, setIsOpen] = useState({ modal: false, card: "" });
  let [tasks, setTasks] = useState([]);

  // useEffect(() => {
  //   console.log("taaaaask", tasks);
  // }, [tasks]);

  const closePopup = () => {
    setIsOpen({ ...isOpen, modal: false });
  };

  const save = (data) => {
    setTasks([...tasks, data]);
  };

  console.log(tasks);

  return (
    <div className="container">
      {/* <div className="top_bar">Kanban App</div> */}
      <div className="top_margin">
        <div className="row">
          <div className="col-3">
            <div className="inner_column">
              <div className="header">
                <div className="backlog">Backlog</div>
                <div
                  onClick={() => setIsOpen({ modal: true, card: "backlog" })}
                  className="plus"
                >
                  +
                </div>
              </div>
              {tasks.map(
                (task, i) =>
                  task.card === "backlog" && (
                    <CardComponent type="backlog" key={i} data={task} />
                  ),
              )}
            </div>
          </div>
          <div className="col-3">
            <div className="inner_column">
              <div className="header">
                <div className="backlog">Todo</div>
                <div
                  onClick={() => setIsOpen({ modal: true, card: "todo" })}
                  className="plus"
                >
                  +
                </div>
              </div>
              {tasks.map(
                (task, i) =>
                  task.card === "todo" && (
                    <CardComponent type="todo" key={i} data={task} />
                  ),
              )}
            </div>
          </div>
          <div className="col-3">
            <div className="inner_column">
              <div className="header">
                <div className="backlog">In progress</div>
                <div
                  onClick={() => setIsOpen({ modal: true, card: "inProgress" })}
                  className="plus"
                >
                  +
                </div>
              </div>
              {tasks.map(
                (task, i) =>
                  task.card === "inProgress" && (
                    <CardComponent type="inProgress" key={i} data={task} />
                  ),
              )}
            </div>
          </div>
          <div className="col-3">
            <div className="inner_column">
              <div className="header">
                <div className="backlog">Done</div>
                <div
                  onClick={() => setIsOpen({ modal: true, card: "done" })}
                  className="plus"
                >
                  +
                </div>
              </div>
              {tasks.map(
                (task, i) =>
                  task.card === "done" && (
                    <CardComponent type="done" key={i} data={task} />
                  ),
              )}
            </div>
          </div>
        </div>
      </div>
      <PopupComponent
        onClose={closePopup}
        onSave={save}
        openPopup={isOpen.modal}
        setOpenPopup={isOpen}
      />
    </div>
  );
}
