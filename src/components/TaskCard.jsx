function TaskCard(props) {
  return (
    <div className="task-card">
      <h3 className="task-title">{props.task.title}</h3>
      <p>{props.task.priority === "High"
            ? "🔴"
            : props.task.priority === "Medium"
            ? "🟡"
            : "🟢"}</p>
      <button onClick={() => props.onDelete(props.task.id)}>
            Delete
        </button>
    </div>
  );
}

export default TaskCard;