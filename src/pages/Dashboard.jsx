import { Link } from "react-router-dom";
import TaskList from "../components/TaskList";

function Dashboard(props) {
  return (
    <>
      <div className="header">
        <h1>Kanban board</h1>
        <Link to="/task/new" className="button primary icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14" />
            <path d="M12 5v14" />
          </svg>
          New Task
        </Link>
      </div>

      <div className="kanban-board">
        <div className="kanban-column">
          <h3>To Do</h3>
          <TaskList
            tasks={props.tasks.filter((task) => task.status === "To Do")}
          />
        </div>

        <div className="kanban-column">
          <h3>In Progress</h3>
          <TaskList
            tasks={props.tasks.filter((task) => task.status === "In Progress")}
          />
        </div>

        <div className="kanban-column">
          <h3>Done</h3>
          <TaskList
            tasks={props.tasks.filter((task) => task.status === "Done")}
          />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
