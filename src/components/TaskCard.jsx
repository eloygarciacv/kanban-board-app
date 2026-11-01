import { Link } from "react-router-dom";

function TaskCard(props) {
  return (
    <Link to={`/tasks/${props.task.id}`} className="task-card">
      <h3>{props.task.title}</h3>
      <p>
        {props.task.priority === "High"
          ? "🔴"
          : props.task.priority === "Medium"
            ? "🟡"
            : "🟢"}
      </p>
    </Link>
  );
}

export default TaskCard;
