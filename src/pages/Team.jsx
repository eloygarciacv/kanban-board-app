import TaskList from "../components/TaskList";

const teamMembers = [
  "Mary Davis",
  "Jane Smith",
  "Mark Johnson",
  "Sarah Brown",
  "David Wilson",
];

function Team({ tasks }) {
  return (
    <>
      <div className="header">
        <h1>Team members</h1>
      </div>

      <div className="team-list">
        {teamMembers.map((member) => {
          const memberTasks = tasks.filter((task) => member === task.assignee);

          return (
            <section key={member} className="team-row">
              <div className="team-member-info">
                <h2>{member}</h2>
                <p>
                  {memberTasks.length}{" "}
                  {memberTasks.length === 1 ? "task" : "tasks"}
                </p>
              </div>

              <div className="team-member-tasks">
                {memberTasks.length > 0 ? (
                  <TaskList tasks={memberTasks} />
                ) : (
                  <p>No tasks assigned</p>
                )}
              </div>
            </section>
          );
        })}
      </div>
    </>
  );
}

export default Team;
