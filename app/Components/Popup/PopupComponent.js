import React, { useState, useEffect } from "react";

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

import "./Popup.module.css";

const taskStatus = [
  { id: 1, name: "Low" },
  { id: 2, name: "Medium" },
  { id: 3, name: "High" },
];
export default function PopupComponent({ openPopup, setOpenPopup }) {
  const [mounted, setMounted] = useState(false);

  const [selectedStatus, setSelectedStatus] = useState(taskStatus[0]);

  function close() {
    setOpenPopup(false);
  }

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Dialog
      open={openPopup}
      // open={isOpen}
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
              className="text-base/7 font-medium text-black mb-10 font-semibold"
            >
              Add Task
            </DialogTitle>
            <div className="add_task">
              <div>
                <div className="text-black">Title</div>
                <Input
                  name="full_name"
                  type="text"
                  className="input_border mb-5 input_text h-10 focus:outline-none"
                />
              </div>

              <div className="">Description</div>
              <div className="mb-5">
                <Textarea
                  name="description"
                  rows={5}
                  className="input_border input_text focus:outline-none"
                />
              </div>
              <div>Priority</div>
              <div className="relative">
                <Listbox value={selectedStatus} onChange={setSelectedStatus}>
                  <ListboxButton className="input_text input_border w-full text-left flex justify-between items-center bg-white/10 px-3 py-2 rounded-lg text-black">
                    {selectedStatus.name}
                    <span className="text-xs">▼</span>
                  </ListboxButton>

                  <ListboxOptions
                    anchor="bottom start"
                    className="w-[var(--button-width)] rounded-xl border border-white/10 bg-gray-800 p-1 [--anchor-gap:var(--spacing-1)] focus:outline-none z-50 mt-1"
                  >
                    {taskStatus.map((status) => (
                      <ListboxOption
                        anchor="bottom start"
                        key={status.id}
                        value={status}
                        className="group flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-white/10"
                      >
                        <div className="text-sm/6 text-white">
                          {status.name}
                        </div>
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
              <Button
                className="ml-2 inline-flex items-center gap-2 rounded-md bg-gray-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-gray-600 data-open:bg-gray-700"
                onClick={close}
              >
                Close
              </Button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
