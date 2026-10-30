import TaskList from "../components/TaskList";

function Dashboard(props) {
  return (
    <div>
      <h1>Dashboard</h1>

      <div className="kanban-board">
        <div className="kanban-column">
          <h3>To Do</h3>
           <TaskList
    tasks={props.tasks.filter((task) => task.status === "To Do")}
    onDelete={props.onDelete}
  />
        </div>

        <div className="kanban-column">
          <h3>In Progress</h3>
          <TaskList
    tasks={props.tasks.filter((task) => task.status === "In Progress")}
    onDelete={props.onDelete}
  />
        </div>

        <div className="kanban-column">
          <h3>Done</h3>
          <TaskList
  tasks={props.tasks.filter((task) => task.status === "Done")}
  onDelete={props.onDelete}
/>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;