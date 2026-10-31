import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      <h1>Sorry, you seem to be lost</h1>

      <Link to="/">Go back home</Link>
    </div>
  );
}
export default NotFound;
