import "./App.css";
import tasks from "./data/tasks.json";

import Sidebar from "./components/Sidebar";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import TaskDetails from "./pages/TaskDetails";

import { Routes, Route } from "react-router-dom";

import { useState } from "react";
import NotFound from "./pages/NotFound";

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
              element={<Dashboard tasks={taskList} onDelete={handleDelete} />}
            />
            <Route
              path="/tasks/:taskId"
              element={<TaskDetails tasks={taskList} />}
            />

            <Route path="/about" element={<About />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
