import React from "react";
import { Link } from "react-router-dom"; // only if you're using React Router

export default function Navbar({ todoCount }) {
  // Decide background color based on number of todos
  let bgColor = "bg-blue-500"; // default
  if (todoCount > 5 && todoCount <= 10) {
    bgColor = "bg-indigo-600"; // darker blue
  } else if (todoCount > 10 && todoCount <= 20) {
    bgColor = "bg-purple-600"; // purple when more todos
  } else if (todoCount > 20) {
    bgColor = "bg-red-600"; // red if overloaded with tasks
  }

  return (
    <nav className={`h-15 ${bgColor} text-white flex justify-between items-center transition-all duration-300`}>
      <div>
        <h1 className="pl-3 font-semibold text-3xl">My Task Page</h1>
      </div>
      <ul className="flex px-10 gap-4 text-lg">
        <li className="cursor-pointer hover:text-gray-400">
          <Link to="/">Home</Link>
        </li>
        <li className="cursor-pointer hover:text-gray-400">
          <Link to="/tasks">Your Tasks ({todoCount})</Link>
        </li>
      </ul>
    </nav>
  );
}
