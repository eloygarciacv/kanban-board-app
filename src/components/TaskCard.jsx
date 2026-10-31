import { Link } from "react-router-dom";

function TaskCard(props) {
  return (
    <div className="task-card">
      <Link to={`/tasks/${props.task.id}`}>
        <h3>{props.task.title}</h3>
      </Link>
      <p>
        {props.task.priority === "High"
          ? "🔴"
          : props.task.priority === "Medium"
            ? "🟡"
            : "🟢"}
      </p>
      <button onClick={() => props.onDelete(props.task.id)}>Delete</button>
    </div>
  );
}

export default TaskCard;
