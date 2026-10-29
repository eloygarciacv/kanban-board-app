import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import tasks from "./data/tasks.json";
import { useState } from "react";
import TaskList from "./components/TaskList";

function App() {
  const [taskList, setTaskList] = useState(tasks);
  const handleDelete = (id) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };

  return (
    <div>
      <NavBar />
      <div className="layout">
        <Sidebar />
        <main>
          <TaskList tasks={taskList} onDelete={handleDelete} />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
