import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Todo from "./components/Todo";

export default function App() {
  const [todos, setTodos] = useState([]); // Lifted state here

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Pass the count to Navbar */}
      <Navbar todoCount={todos.length} />

      <div className="pt-5">
        {/* Pass todos + setTodos so Todo can still manage them */}
        <Todo todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
}
