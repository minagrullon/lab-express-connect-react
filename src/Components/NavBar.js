import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/logs">Index</Link>
      <button>
        <Link to="/logs/new">New Log</Link>
      </button>
    </div>
  );
}