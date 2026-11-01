import { Link, useParams, useNavigate } from "react-router-dom";
import NotFound from "./NotFound";

function TaskDetails(props) {
  const { taskId } = useParams();
  const navigate = useNavigate();

  const foundTask = props.tasks.find((task) => {
    return task.id === taskId;
  });

  if (!foundTask) {
    return <NotFound />;
  }

  // needed to navigate after deleting or i would stay in a not found page
  const handleTaskDelete = () => {
    props.onDelete(foundTask.id);
    navigate("/");
  };

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

      <button onClick={() => navigate(`/task/${foundTask.id}/edit`)}>
        Edit
      </button>
      <button onClick={handleTaskDelete}>Delete</button>
    </article>
  );
}

export default TaskDetails;
