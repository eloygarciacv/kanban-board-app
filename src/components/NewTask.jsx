import { useState } from "react";

function NewTask(props) {
  // useState for each object field
  const [titleValue, setTitleValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");
  const [assigneeValue, setAssigneeValue] = useState("");
  const [statusValue, setStatusValue] = useState("To Do");
  const [priorityValue, setPriorityValue] = useState("Low");
  const [createdDateValue, setCreatedDateValue] = useState("");
  const [dueDateValue, setDueDateValue] = useState("");

  // handlers for each field
  const handleTitleChange = (e) => {
    setTitleValue(e.target.value);
  };
  const handleDescriptionChange = (e) => {
    setDescriptionValue(e.target.value);
  };
  const handleAssigneeChange = (e) => {
    setAssigneeValue(e.target.value);
  };
  const handleStatusChange = (e) => {
    setStatusValue(e.target.value);
  };
  const handlePriorityChange = (e) => {
    setPriorityValue(e.target.value);
  };
  const handleCreatedDateChange = (e) => {
    setCreatedDateValue(e.target.value);
  };
  const handleDueDateChange = (e) => {
    setDueDateValue(e.target.value);
  };

  // function to add new tasks
  const handleAddTask = (e) => {
    e.preventDefault();

    const lastTask = props.tasks[props.tasks.length - 1];
    const nextId = lastTask ? Number(lastTask.id) + 1 : 1;

    const newTask = {
      id: String(nextId),
      title: titleValue,
      description: descriptionValue,
      assignee: assigneeValue,
      status: statusValue,
      priority: priorityValue,
      createdDate: createdDateValue,
      dueDate: dueDateValue,
    };

    props.setTaskList((state) => {
      const cloneState = [...state];
      cloneState.push(newTask);
      return cloneState;
    });

    // resets for each field
    setTitleValue("");
    setDescriptionValue("");
    setAssigneeValue("");
    setStatusValue("To Do");
    setPriorityValue("Low");
    setCreatedDateValue("");
    setDueDateValue("");
  };

  return (
    <div className="add-form container">
      <h2>Add Form</h2>

      <form onSubmit={handleAddTask}>
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
          Add
        </button>
      </form>
    </div>
  );
}

export default NewTask;
