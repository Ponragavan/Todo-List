import React, { useState } from "react";
import trash from "../assets/trash.png";
import TaskDetails from "./TaskDetails";

const AllTasks = (props) => {
  const [completedTasks, setCompletedTasks] = useState([]);
  const [selectedTask,setSelectedTask] = useState();

  const handleCheckBox = (id) => {
    if (completedTasks.includes(id)) {
      setCompletedTasks(completedTasks.filter((taskId) => taskId !== id));
    } else {
      setCompletedTasks([...completedTasks, id]);
    }
  };

  const handleViewDetails = (task) => {
    setSelectedTask(task)
  }

  const newTasks = props.tasks;

  return (
    <div className="h-full flex flex-col items-center gap-8 mt-10">
      {newTasks.map((task) => (
        <li
          key={task.id}
          className={`h-28 flex justify-between items-center px-5 max-md:px-2 bg-gray-300 w-3/4 max-md:w-11/12 max-md:h-40 list-none rounded-2xl ${
            completedTasks.includes(task.id) ? "bg-green-300" : ""
          }`}
        >
          <div>
            <h1
              className={`text-2xl max-md:text-xl capitalize text-purple-500 font-bold ${
                completedTasks.includes(task.id) ? "line-through" : ""
              }`}
            >
              {task.name}
            </h1>
            <p className={`italic max-md:text-xs ${completedTasks.includes(task.id) ? 'line-through' : 'font-semibold'}`}>added on {task.dateAdded}</p>
          </div>
          <div className="mr-5 max-md:mr-2 flex items-center">
            <input
              className="mr-3 max-md:mr-1 h-6 w-6 bg-transparent border border-stone-500 rounded-md"
              id={`check-${task.id}`}
              type="checkbox"
              checked={completedTasks.includes(task.id)}
              onChange={() => handleCheckBox(task.id)}
            />
            <label htmlFor={`check-${task.id}`} className="mr-5 max-md:text-xs max-md:mr-2 max-md:hidden">
              Mark as Complete
            </label>
            <button onClick={() => handleViewDetails(task)} className="mr-5 max-md:mr-2 bg-indigo-200 px-3 py-2 rounded-lg transition duration-200 hover:text-white hover:bg-indigo-400">
              View Details
            </button>
            <button onClick={() => props.onDelete(task.id)}>
              <img
                src={trash}
                alt="Trash icon"
                className="translate-y-1 active:scale-105"
              />
            </button>
          </div>
        </li>
      ))}
      {selectedTask && <TaskDetails task={selectedTask} onClose={()=>setSelectedTask()} onDelete={props.onDelete} />}
    </div>
  );
};

export default AllTasks;
