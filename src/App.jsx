import logo from "./assets/logo.png";
import addButton from "./assets/add.png";
import AllTasks from "./components/AllTasks";
import { useState } from "react";
import NewChallenge from "./components/NewChallenge";

function App() {
  const [allTasks, setAllTasks] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const addNewTask = (value) => {
    setAllTasks([value, ...allTasks]);
  };

  const deleteHandler = (index) => {
    setAllTasks(allTasks.filter((task) => task.id !== index));
  };

  return (
    <>
      {isExpanded && <NewChallenge onClose={handleExpand} onAdd={addNewTask} />}
      <div>
        <header className="h-16 w-full bg-slate-800 flex justify-evenly items-center">
          <div className="flex gap-3 items-center">
            <img src={logo} alt="Logo of the app" className="h-12" />
            <h2 className="text-3xl text-white">Todo List</h2>
          </div>
          <button
            className="flex gap-2 py-3 px-2 max-[450px]:px-3 rounded-xl bg-gradient-to-tr from-sky-500 via-cyan-300 to-teal-200 transition hover:scale-105 active:scale-100"
            onClick={handleExpand}
          >
            <p className="text-rose-700 font-medium font-sans max-[450px]:hidden">Add New Tasks</p>
            <img src={addButton} alt="add button" />
          </button>
        </header>
        <main>
          {allTasks.length < 1 && (
            <p className="text-center mt-20 text-xl">
              No tasks added, unless you{" "}
              <span
                className="text-blue-600 cursor-pointer transition duration-200 hover:border-b hover:border-blue-600"
                onClick={handleExpand}
              >
                choose
              </span>{" "}
              to add them.{" "}
            </p>
          )}
          <AllTasks tasks={allTasks} onDelete={deleteHandler} />
        </main>
      </div>
    </>
  );
}

export default App;
