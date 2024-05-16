import React from "react";
import BackDrop from "./BackDrop";
import close from "../assets/close.png";

const TaskDetails = ({ task, onClose,onDelete }) => {
    const deleteHandler = () => {
        onDelete(task.id);
        onClose();
    }
  return (
    <BackDrop onClick={onClose}>
      <header className="flex justify-between px-10 py-8">
        <h2 className="capitalize text-2xl text-indigo-700 italic">
          Task Details
        </h2>
        <button onClick={onClose}>
          <img src={close} alt="" />
        </button>
      </header>
      <main>
        <p className="text-3xl text-center">
          Task title is{" "}
          <span className="uppercase font-bold bg-gradient-to-r from-pink-700 to-red-300 text-transparent bg-clip-text">
            {task.name}
          </span>
        </p>
        <br />
        <p className="py-5 px-10 text-wrap text-xl text-center text-slate-700 italic">
          {task.description}
        </p>
        <br />
        <div className="text-center text-lg">
          <p>
            Task Added On :{" "}
            <span className="text-slate-800 italic">{task.dateAdded}</span>
          </p>
          <p>
            Expected Date for Task Completion :{" "}
            <span className="text-slate-800 italic">{task.dateCompleted}</span>
          </p>
        </div>
      </main>
      <footer className="pr-16 flex justify-end  translate-y-10">
        <button onClick={deleteHandler} className="px-5 py-2 bg-red-500 mr-10 font-bold rounded-lg transition hover:text-white hover:shadow-lg">
          Delete
        </button>
        <button onClick={onClose} className="px-5 py-2 outline-none border-2 font-bold border-black text-black rounded-lg transition hover:bg-black hover:text-white">
          Close
        </button>
      </footer>
    </BackDrop>
  );
};

export default TaskDetails;
