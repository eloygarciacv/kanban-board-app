import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import NotFound from "./NotFound";

function EditTask(props) {
  const { taskId } = useParams();
  const navigate = useNavigate();

  const foundTask = props.tasks.find((task) => {
    return task.id === taskId;
  });

  const [titleValue, setTitleValue] = useState(
    foundTask ? foundTask.title : "",
  );
  const [descriptionValue, setDescriptionValue] = useState(
    foundTask ? foundTask.description : "",
  );
  const [assigneeValue, setAssigneeValue] = useState(
    foundTask ? foundTask.assignee : "",
  );
  const [statusValue, setStatusValue] = useState(
    foundTask ? foundTask.status : "To Do",
  );
  const [priorityValue, setPriorityValue] = useState(
    foundTask ? foundTask.priority : "Low",
  );
  const [createdDateValue, setCreatedDateValue] = useState(
    foundTask ? foundTask.createdDate : "",
  );
  const [dueDateValue, setDueDateValue] = useState(
    foundTask ? foundTask.dueDate : "",
  );

  if (!foundTask) {
    return <NotFound />;
  }

  const handleTitleChange = (event) => {
    setTitleValue(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescriptionValue(event.target.value);
  };

  const handleAssigneeChange = (event) => {
    setAssigneeValue(event.target.value);
  };

  const handleStatusChange = (event) => {
    setStatusValue(event.target.value);
  };

  const handlePriorityChange = (event) => {
    setPriorityValue(event.target.value);
  };

  const handleCreatedDateChange = (event) => {
    setCreatedDateValue(event.target.value);
  };

  const handleDueDateChange = (event) => {
    setDueDateValue(event.target.value);
  };

  const handleEditTask = (event) => {
    event.preventDefault();

    const editedTask = {
      id: foundTask.id,
      title: titleValue,
      description: descriptionValue,
      assignee: assigneeValue,
      status: statusValue,
      priority: priorityValue,
      createdDate: createdDateValue,
      dueDate: dueDateValue,
    };

    props.onUpdate(editedTask);
    navigate("/");
  };

  return (
    <>
      <div className="header back">
        <Link to={`/task/${foundTask.id}`} className="button circle">
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
        <h2>Edit task</h2>
      </div>
      <article>
        <form onSubmit={handleEditTask}>
          <div>
            <label htmlFor="title">Title: </label>
            <input
              id="title"
              type="text"
              name="title"
              onChange={handleTitleChange}
              value={titleValue}
              placeholder="Title"
              required
            />
          </div>
          <div>
            <label htmlFor="description">Description: </label>
            <input
              id="description"
              type="text"
              name="description"
              onChange={handleDescriptionChange}
              value={descriptionValue}
              placeholder="Description"
              required
            />
          </div>
          <div>
            <label htmlFor="assignee">Assignee: </label>
            <select
              id="assignee"
              name="assignee"
              onChange={handleAssigneeChange}
              value={assigneeValue}
              required
            >
              <option value="" disabled>
                Select team member
              </option>
              <option value="Mary Davis">Mary Davis</option>
              <option value="Jane Smith">Jane Smith</option>
              <option value="Mark Johnson">Mark Johnson</option>
              <option value="Sarah Brown">Sarah Brown</option>
              <option value="David Wilson">David Wilson</option>
            </select>
          </div>
          <div>
            <label htmlFor="status">Status: </label>
            <select
              id="status"
              name="status"
              onChange={handleStatusChange}
              value={statusValue}
              required
            >
              <option value="To Do">To Do</option>
              <option value="In Progress">In Progress</option>
              <option value="Done">Done</option>
            </select>
          </div>
          <div>
            <label htmlFor="priority">Priority: </label>
            <select
              id="priority"
              name="priority"
              onChange={handlePriorityChange}
              value={priorityValue}
              required
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>
          <div>
            <label htmlFor="createdDate">Created Date: </label>
            <input
              id="createdDate"
              type="date"
              name="createdDate"
              onChange={handleCreatedDateChange}
              value={createdDateValue}
              required
            />
          </div>
          <div>
            <label htmlFor="dueDate">Due Date: </label>
            <input
              id="dueDate"
              type="date"
              name="dueDate"
              onChange={handleDueDateChange}
              value={dueDateValue}
              required
            />
          </div>

          <div className="form-actions">
  <button
    disabled={
      !titleValue ||
      !descriptionValue ||
      !assigneeValue ||
      !statusValue ||
      !priorityValue ||
      !createdDateValue ||
      !dueDateValue
    }
  >
    Save
  </button>

  <button
    type="button"
    className="cancel-button"
    onClick={() => navigate(`/task/${foundTask.id}`)}
  >
    Cancel
  </button>
</div>
        </form>
      </article>
    </>
  );
}

export default EditTask;
