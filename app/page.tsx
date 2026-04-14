"use client";
import { useState } from "react";

import CardComponent from "./Components/Card/CardComponent";
import PopupComponent from "./Components/Popup/PopupComponent";

export default function Home() {
  let [isOpen, setIsOpen] = useState({ modal: false, card: "" });
  let [dataToEdit, setDataToEdit] = useState({});
  let [isEdit, setIsEdit] = useState(false);
  let [tasks, setTasks] = useState([]);

  const closePopup = () => {
    setIsEdit(false);
    setDataToEdit({});
    setIsOpen({ ...isOpen, modal: false });
  };

  const save = (data) => {
    setTasks([...tasks, data]);
  };

  const update = (data) => {
    console.log(data);
    let taskList = [...tasks];
    taskList.forEach((task) => {
      if(task.id == data.id){
        task.title = data.title;
        task.desc = data.desc;
        task.priority = data.priority;
      }
    });
    setTasks(taskList);
  };

  const deleteTask = (id) => {
    let taskList = tasks;
    let deleteTask = taskList.filter((task) => task.id !== id);
    setTasks(deleteTask);
  };

  const editTaskById = (id) => {
    let taskArray = tasks.filter((task) => task.id == id);
    let task = taskArray[0];

    // NEED TO FIX SET STATE
    setIsEdit(true);
    setDataToEdit(task);
    setIsOpen({ modal: true, card: task });

    console.log(dataToEdit);
  };

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
                    <CardComponent
                      type="backlog"
                      key={i}
                      data={task}
                      deleteTask={deleteTask}
                      editTaskById={editTaskById}
                    />
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
                    <CardComponent
                      type="todo"
                      key={i}
                      data={task}
                      deleteTask={deleteTask}
                      editTaskById={editTaskById}
                    />
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
                    <CardComponent
                      type="inProgress"
                      key={i}
                      data={task}
                      deleteTask={deleteTask}
                      editTaskById={editTaskById}
                    />
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
                     <CardComponent
                      type="done"
                      key={i}
                      data={task}
                      deleteTask={deleteTask}
                      editTaskById={editTaskById}
                    />
                  ),
              )}
            </div>
          </div>
        </div>
      </div>
      <PopupComponent
        onClose={closePopup}
        onSave={save}
        onUpdate={update}
        openPopup={isOpen.modal}
        setOpenPopup={isOpen}
        // edit={isEdit}
        editData={dataToEdit}
      />
    </div>
  );
}
