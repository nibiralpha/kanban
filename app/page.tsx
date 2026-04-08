"use client";

import {
  Textarea,
  Input,
  Button,
  Dialog,
  DialogPanel,
  DialogTitle,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { useState, useEffect } from "react";

import CardComponent from "./Components/Card/CardComponent";

const taskStatus = [
  { id: 1, name: "Low" },
  { id: 2, name: "Medium" },
  { id: 3, name: "High" },
];

export default function Home() {
  let [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const [selectedStatus, setSelectedStatus] = useState(taskStatus[0]);

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="container">
      <div className="top_margin">
        <div className="row">
          <div className="col-3">
            <div className="inner_column">
              <div className="header">
                <div className="backlog">Backlog</div>
                <div onClick={open} className="plus">
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
                <div className="plus">+</div>
              </div>
              <CardComponent />
            </div>
          </div>
          <div className="col-3">
            <div className="inner_column">
              <div className="header">
                <div className="backlog">In progress</div>
                <div className="plus">+</div>
              </div>
              <CardComponent />
            </div>
          </div>
          <div className="col-3">
            <div className="inner_column">
              <div className="header">
                <div className="backlog">Done</div>
                <div className="plus">+</div>
              </div>
              <CardComponent />
            </div>
          </div>
        </div>
      </div>

      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={close}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="custom_popup w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
            >
              <DialogTitle
                as="h3"
                className="text-base/7 font-medium text-white mb-10 font-semibold"
              >
                Add Task
              </DialogTitle>
              {/* <p className="mt-2 text-sm/6 text-black/50"> */}
              {/* Your payment has been successfully submitted. We’ve sent you an
                email with all of the details of your order. */}
              <div className="add_task">
                <div>
                  <div className="">Title</div>
                  <Input
                    name="full_name"
                    type="text"
                    className="input_border mb-5"
                  />
                </div>

                <div className="">Description</div>
                <div>
                  <Textarea name="description" className="input_border" />
                </div>

                <div>Priority</div>
                <div>
                  <Listbox value={selectedStatus} onChange={setSelectedStatus}>
                    <ListboxButton>{selectedStatus.name}</ListboxButton>
                    <ListboxOptions anchor="bottom">
                      {taskStatus.map((status) => (
                        <ListboxOption
                          key={status.id}
                          value={status}
                          className="data-focus:bg-blue-100"
                        >
                          {status.name}
                        </ListboxOption>
                      ))}
                    </ListboxOptions>
                  </Listbox>
                </div>
              </div>
              {/* </p> */}
              <div className="mt-4">
                <Button
                  className="inline-flex items-center gap-2 rounded-md bg-gray-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-gray-600 data-open:bg-gray-700"
                  onClick={close}
                >
                  Submit
                </Button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
