import React, { useState } from "react";

export default function Todo({ todos, setTodos }) {
  const [todo, setTodo] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");

  // Add new todo
  const handleAdd = () => {
    if (todo.trim() === "") return;
    const newTodo = { id: Date.now(), text: todo, completed: false };
    setTodos([...todos, newTodo]);
    setTodo("");
  };

  // Delete
  const handleDelete = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  // Clear all
  const handleClearAll = () => {
    setTodos([]);
  };

  // Toggle complete
  const handleToggleComplete = (id) => {
    setTodos(
      todos.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  // Edit
  const handleEdit = (id, currentText) => {
    setEditingId(id);
    setEditText(currentText);
  };

  // Update
  const handleUpdate = (id) => {
    if (editText.trim() === "") return;
    setTodos(
      todos.map((t) =>
        t.id === id ? { ...t, text: editText } : t
      )
    );
    setEditingId(null);
    setEditText("");
  };

  // Cancel edit
  const handleCancel = () => {
    setEditingId(null);
    setEditText("");
  };

  return (
    <div className="bg-blue-200 h-full m-3 rounded-xl p-5">
      <h1 className="font-semibold mb-3 text-lg">Add a Todo</h1>

      {/* Input */}
      <div className="gap-3 flex mb-5">
        <input
          className="px-2 rounded-lg w-1/2 bg-white border border-gray-400"
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Enter your todo"
          onKeyDown={(e) => e.key === "Enter" && handleAdd()}
        />
        <button
          onClick={handleAdd}
          className="rounded-xl bg-indigo-500 px-3 py-1 hover:bg-indigo-600 text-white"
        >
          Add
        </button>
      </div>

      <h2 className="font-semibold mb-2">Your Todos</h2>

      {todos.length === 0 ? (
        <p>No todos yet.</p>
      ) : (
        <>
          {todos.map((t) => (
            <div
              key={t.id}
              className="flex items-center gap-4 mb-2 bg-white p-2 rounded-lg"
            >
              {editingId === t.id ? (
                <>
                  <input
                    type="text"
                    className="px-2 rounded-lg w-1/2 border border-gray-400"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleUpdate(t.id)}
                  />
                  <button
                    onClick={() => handleUpdate(t.id)}
                    className="rounded-xl bg-green-500 px-3 py-1 hover:bg-green-600 text-white"
                  >
                    Update
                  </button>
                  <button
                    onClick={handleCancel}
                    className="rounded-xl bg-gray-500 px-3 py-1 hover:bg-gray-600 text-white"
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <p
                    onClick={() => handleToggleComplete(t.id)}
                    className={`cursor-pointer flex-1 ${
                      t.completed ? "line-through text-gray-500" : ""
                    }`}
                  >
                    {t.text}
                  </p>
                  <button
                    onClick={() => handleEdit(t.id, t.text)}
                    className="rounded-xl bg-yellow-500 px-3 py-1 hover:bg-yellow-600 text-white"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(t.id)}
                    className="rounded-xl bg-red-500 px-3 py-1 hover:bg-red-600 text-white"
                  >
                    Delete
                  </button>
                </>
              )}
            </div>
          ))}

          {/* Clear All Button */}
          <button
            onClick={handleClearAll}
            className="mt-4 rounded-xl bg-red-700 px-4 py-2 hover:bg-red-800 text-white w-full"
          >
            Clear All Todos
          </button>
        </>
      )}
    </div>
  );
}
