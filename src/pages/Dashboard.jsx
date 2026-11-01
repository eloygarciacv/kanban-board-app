import { Link } from "react-router-dom";
import TaskList from "../components/TaskList";

function Dashboard(props) {
  return (
    <div>
      <h1>Dashboard</h1>
      <Link to="/task/new">New task</Link>

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
