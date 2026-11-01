import "./App.css";
import tasks from "./data/tasks.json";

import Sidebar from "./components/Sidebar";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import TaskDetails from "./pages/TaskDetails";
import EditTask from "./pages/EditTask";
import NewTask from "./pages/NewTask";

import { Routes, Route } from "react-router-dom";

import { useState } from "react";
import NotFound from "./pages/NotFound";

function App() {
  const [taskList, setTaskList] = useState(tasks);

  const handleDelete = (id) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };

  const handleUpdate = (editedTask) => {
    const updatedTaskList = taskList.map((task) => {
      if (task.id === editedTask.id) {
        return editedTask;
      }

      return task;
    });

    setTaskList(updatedTaskList);
  };

  return (
    <div className="app-shell">
      <Sidebar />

      <main>
        <Routes>
          <Route
            path="/"
            element={<Dashboard tasks={taskList} setTaskList={setTaskList} />}
          />
          <Route
            path="/task/:taskId"
            element={<TaskDetails tasks={taskList} onDelete={handleDelete} />}
          />
          <Route
            path="/task/:taskId/edit"
            element={<EditTask tasks={taskList} onUpdate={handleUpdate} />}
          />
          <Route
            path="/task/new"
            element={<NewTask tasks={taskList} setTaskList={setTaskList} />}
          />

          <Route path="/about" element={<About />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
