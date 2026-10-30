import TaskCard from "./TaskCard";

function TaskList(props) {
  return (
    <div>
      <h2></h2>

      {props.tasks.map((task) => (
        <TaskCard key={task.id} task={task} onDelete={props.onDelete} />
      ))}
    </div>

    // TO-DO: Add 3 Lists for to-do, in progress and done that filter by task.status
  );
}

export default TaskList;
