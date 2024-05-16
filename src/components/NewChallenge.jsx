import React, { useState } from "react";
import logo from "../assets/logo.png";
import close from "../assets/close.png";
import BackDrop from "./BackDrop";

const NewChallenge = (props) => {
  const [taskName, setTaskName] = useState("");
  const [taskDesc, setTaskDesc] = useState("");
  const [taskCompleteDate, setTaskCompleteDate] = useState("");

  const closeNewChallenge = () => {
    props.onClose();
  };

  const addNewChallenge = (e) => {
    e.preventDefault();
    const newTask = {
      id: Math.floor(Math.random() * 900) + 100,
      name: taskName,
      description: taskDesc,
      dateAdded: new Date().toISOString().split('T')[0],
      dateCompleted: taskCompleteDate,
    };
    props.onAdd(newTask);
    setTaskCompleteDate("");
    setTaskDesc("");
    setTaskName("");
    props.onClose();
  };

  return (
    <BackDrop onClick={closeNewChallenge}>
      <header className="flex justify-between px-10 py-8 max-md:px-5">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Logo" className="h-8" />
          <h1 className="text-pink-600 text-2xl">Add New Task</h1>
        </div>
        <button onClick={closeNewChallenge}>
          <img src={close} alt="" />
        </button>
      </header>
      <form onSubmit={addNewChallenge} className="pl-16 max-md:pl-5">
        <div className="mb-4">
          <label htmlFor="taskName" className="block text-gray-700">
            Task Name
          </label>
          <input
            type="text"
            id="taskName"
            className="form-input mt-1 block p-3 h-10 w-11/12 outline-none border-2 focus:border-cyan-500"
            onChange={(e) => setTaskName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700">
            Description
          </label>
          <textarea
            id="description"
            className="form-textarea h-20 px-3 py-1 resize-none mt-1 block w-11/12 outline-none border-2 focus:border-cyan-500"
            rows="3"
            onChange={(e) => setTaskDesc(e.target.value)}
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="complete-date" className="block text-gray-700">
            Date Expected to Complete
          </label>
          <input
            type="date"
            id="complete-date"
            min={new Date().toISOString().split('T')[0]} 
            className="form-input mt-1 block h-10 p-3 w-11/12 outline-none border-2 focus:border-cyan-500"
            onChange={(e) => setTaskCompleteDate(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 mx-20 max-md:mx-5 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:cursor-not-allowed disabled:bg-blue-500"
          disabled={!taskCompleteDate || !taskDesc || !taskName}
        >
          Add Task
        </button>
        <button
          onClick={closeNewChallenge}
          className="px-4 py-2 mx-20 max-md:mx-5 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Close
        </button>
      </form>
    </BackDrop>
  );
};

export default NewChallenge;
