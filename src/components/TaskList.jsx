import TaskCard from "./TaskCard";

function TaskList(props) {
  return (
    <div>
      <h2>Task List</h2>

      {props.tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          onDelete={props.onDelete}
        />
      ))}
    </div>
  );
}

export default TaskList;