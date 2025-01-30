import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateTask } from "../Redux/taskSlice";

const EditTask = () => {
  const { id } = useParams(); // Get task index from URL
  const taskIndex = parseInt(id, 10);
  const tasks = useSelector((state) => state.tasks.tasks); // Fix: Access tasks correctly
  const task = tasks && tasks.length > taskIndex ? tasks[taskIndex] : null; // Ensure task exists
  const [updatedTask, setUpdatedTask] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Populate input field with task name on mount
  useEffect(() => {
    if (task) {
      setUpdatedTask(task.name);
    }
  }, [task]);

  // Handle invalid task index
  if (!task) {
    return (
      <div className="container mx-auto text-center p-4">
        <p className="text-red-600 text-lg">Task not found!</p>
      </div>
    );
  }

  // Handle form submission
  const handleUpdateTask = (e) => {
    e.preventDefault(); // Prevent page reload on submit
    if (updatedTask.trim()) {
      dispatch(updateTask({ index: taskIndex, name: updatedTask })); // Dispatch updateTask action
      navigate("/"); // Redirect to Home page
    } else {
      alert("Task name cannot be empty!");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Edit Task</h2>

      <form onSubmit={handleUpdateTask}>
        <div className="mb-4">
          <label htmlFor="taskName" className="block text-sm font-medium text-gray-700">
            Task Name
          </label>
          <input
            type="text"
            id="taskName"
            value={updatedTask}
            onChange={(e) => setUpdatedTask(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter new task name"
          />
        </div>

        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditTask;
