import React from "react";
import { Link } from "react-router-dom";
import SecondaryPage from "../pages/SecondaryPage";
export default function Nav() {
  return (
    <div>
      <div className="nav uppercase">
        <Link to="/">
          <div>Home</div>
        </Link>
        <Link to="/second">
          <div>Second</div>
        </Link>
      </div>
    </div>
  );
}
