function TaskCard(props) {
  return (
    <div>
      <h3>{props.task.title}</h3>
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