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
    <>
      <div className="header back">
        <Link
          onClick={(event) => {
            event.preventDefault();
            navigate(-1);
          }}
          className="button circle"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m12 19-7-7 7-7" />
            <path d="M19 12H5" />
          </svg>
        </Link>
        <h2>Task details</h2>
      </div>
      <article>
        <h3 className="task-details-title">{foundTask.title}</h3>

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

        <div className="task-actions">
          <button
            className="edit-button"
            onClick={() => navigate(`/task/${foundTask.id}/edit`)}
          >
            Edit
          </button>

          <button className="delete-button" onClick={handleTaskDelete}>
            Delete
          </button>
        </div>
      </article>
    </>
  );
}

export default TaskDetails;
