import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <>
      <aside>
        <nav>
          <h3>
            <Link to="/">
              <strong>Trellon't</strong>
            </Link>
          </h3>
          <ul>
            <li className="inactive">
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
                <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
                <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
              </svg>
              <p>Inbox</p>
            </li>
          </ul>

          <ul>
            <li className="title">
              <p>Planner</p>
            </li>
            <Link to="/">
              <li>
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
                  <rect width="18" height="18" x="3" y="3" rx="2" />
                  <path d="M8 7v7" />
                  <path d="M12 7v4" />
                  <path d="M16 7v9" />
                </svg>
                <p>Kanban board</p>
              </li>
            </Link>
            <li className="inactive">
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
                <path d="M8 2v3" />
                <path d="M16 2v3" />
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M3 9h18" />
                <path d="M8 13h.01" />
                <path d="M12 13h.01" />
                <path d="M16 13h.01" />
                <path d="M8 17h.01" />
                <path d="M12 17h.01" />
                <path d="M16 17h.01" />
              </svg>
              <p>Calendar</p>
            </li>
          </ul>

          <ul>
            <li className="title">
              <p>Workspace</p>
            </li>
            <li className="inactive">
              <p>Team</p>
            </li>
          </ul>
        </nav>
        <nav>
          <ul>
            <Link to="/about">
              <li>
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
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16v-4" />
                  <path d="M12 8h.01" />
                </svg>
                <p>About</p>
              </li>
            </Link>
          </ul>
        </nav>
      </aside>
    </>
  );
}

export default Sidebar;
