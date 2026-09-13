import { Link } from "react-router-dom";

function Unauthorized() {
  return (
    <div className="container text-center mt-5">
      <h1>403 - Unauthorized</h1>

      <p>
        You don't have permission to access this page.
      </p>

      <Link
        to="/"
        className="btn btn-primary"
      >
        Go Home
      </Link>
    </div>
  );
}

export default Unauthorized;