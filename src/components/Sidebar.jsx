import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <>
      <aside>
        <div>
          <h1>Kanban Board</h1>
        </div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
        <footer>
          <a href="https://github.com/eloygarciacv/kanban-board-app">
            GitHub repository
          </a>
        </footer>
      </aside>
    </>
  );
}

export default Sidebar;
