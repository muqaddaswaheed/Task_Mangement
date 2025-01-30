import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const TaskForm = ({ onSubmit, initialValue = "" }) => {
  const [taskName, setTaskName] = useState(initialValue);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim()) {
      onSubmit(taskName);
      setTaskName("");
      navigate("/"); 
    } else {
      alert("Task name cannot be empty!");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Enter task name"
        className="border p-2 rounded w-full mb-2"
      />
      <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
        Save Task
      </button>
    </form>
  );
};

export default TaskForm;
