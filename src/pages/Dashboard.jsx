import TaskList from "../components/TaskList";
import NewTask from "../components/NewTask";

function Dashboard(props) {
  return (
    <div>
      <h1>Dashboard</h1>

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

      <NewTask tasks={props.tasks} setTaskList={props.setTaskList} />
    </div>
  );
}

export default Dashboard;
