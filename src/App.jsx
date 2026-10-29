import "./App.css";
import tasks from "./data/tasks.json";

import Sidebar from "./components/Sidebar";
import TaskList from "./components/TaskList";
import About from "./pages/About";

import { Routes, Route } from "react-router-dom";

import { useState } from "react";

function App() {
  const [taskList, setTaskList] = useState(tasks);
  const handleDelete = (id) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };

  return (
    <div>
      <div className="layout">
        <Sidebar />

        <main>
          <Routes>
            <Route
              path="/"
              element={<TaskList tasks={taskList} onDelete={handleDelete} />}
            />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
