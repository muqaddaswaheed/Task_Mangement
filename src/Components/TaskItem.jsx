import React from "react";
import { Link } from "react-router-dom";

const TaskItem = ({ task, index, onDelete }) => {
  return (
    <div className="flex items-center justify-between border p-2 mb-2 rounded">
      <p>{task.name}</p>
      <div>
        <Link to={`/edit-task/${index}`} className="text-blue-600 mr-2">
          Edit
        </Link>
        <button onClick={() => onDelete(index)} className="text-red-600">
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
