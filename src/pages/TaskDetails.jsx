import { Link, useParams } from "react-router-dom";

function TaskDetails({ tasks }) {
  const params = useParams();

  const foundTask = tasks.find((task) => {
    return task.id === params.taskId;
  });

  return (
    <article>
      <Link to="/">← Back to dashboard</Link>

      <h1>{foundTask.title}</h1>

      <p>{foundTask.description}</p>

      <dl>
        <dt>Assignee</dt>
        <dd>{foundTask.assignee}</dd>

        <dt>Status</dt>
        <dd>{foundTask.status}</dd>

        <dt>Priority</dt>
        <dd>{foundTask.priority}</dd>

        <dt>Created date</dt>
        <dd>{foundTask.createdDate}</dd>

        <dt>Due date</dt>
        <dd>{foundTask.dueDate}</dd>
      </dl>
    </article>
  );
}

export default TaskDetails;
