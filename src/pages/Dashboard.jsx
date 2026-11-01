import { Link } from "react-router-dom";
import TaskList from "../components/TaskList";

function Dashboard(props) {
  return (
    <div>
      <div className="header">
        <h1>Kanban board</h1>
        <Link to="/task/new" className="button primary">
          + New Task
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
    </div>
  );
}

export default Dashboard;
