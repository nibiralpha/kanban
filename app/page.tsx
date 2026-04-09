"use client";
import { useState, useEffect } from "react";

import CardComponent from "./Components/Card/CardComponent";
import PopupComponent from "./Components/Popup/PopupComponent";

export default function Home() {
  let [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // console.log(isOpen);
  }, [isOpen]);

  return (
    <div className="container">
      {/* <div className="top_bar">Kanban App</div> */}
      <div className="top_margin">
        <div className="row">
          <div className="col-3">
            <div className="inner_column">
              <div className="header">
                <div className="backlog">Backlog</div>
                <div onClick={() => setIsOpen(true)} className="plus">
                  +
                </div>
              </div>
              <CardComponent />
            </div>
          </div>
          <div className="col-3">
            <div className="inner_column">
              <div className="header">
                <div className="backlog">Todo</div>
                <div onClick={() => setIsOpen(true)} className="plus">
                  +
                </div>
              </div>
              <CardComponent />
            </div>
          </div>
          <div className="col-3">
            <div className="inner_column">
              <div className="header">
                <div className="backlog">In progress</div>
                <div onClick={() => setIsOpen(true)} className="plus">
                  +
                </div>
              </div>
              <CardComponent />
            </div>
          </div>
          <div className="col-3">
            <div className="inner_column">
              <div className="header">
                <div className="backlog">Done</div>
                <div onClick={() => setIsOpen(true)} className="plus">
                  +
                </div>
              </div>
              <CardComponent />
            </div>
          </div>
        </div>
      </div>
      <PopupComponent openPopup={isOpen} setOpenPopup={setIsOpen} />
    </div>
  );
}
