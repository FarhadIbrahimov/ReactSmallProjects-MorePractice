import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="navigation">
      <Link to="/">
        <div>Home</div>
      </Link>
      <Link to="/my-stocks">
        <div>Followed Stocks</div>
      </Link>
      <Link to="/about">
        <div>About</div>
      </Link>
    </div>
  );
}
