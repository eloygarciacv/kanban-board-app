import TaskCard from "./TaskCard";

function TaskList(props) {
  return (
    <div>
      {props.tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
