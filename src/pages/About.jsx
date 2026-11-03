function About() {
  return (
    <>
      <div className="header">
        <h1>About Trellon't</h1>
      </div>

      <section className="about-section">
        <p>
          Trellon't is a Kanban-style task management application built with
          React as part of the Ironhack Web Development Bootcamp.
        </p>
        <p>
          The application allows users to create, edit, delete, and organize
          tasks across three stages: To Do, In Progress, and Done.
        </p>
      </section>
      <section className="team-section">
        <h2>Meet the Team</h2>

        <div className="team-card">
          <h3>Isaac Veloso & Eloy García</h3>

          <div className="team-links">
            <a
              href="https://github.com/eloygarciacv/kanban-board-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Repository
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
