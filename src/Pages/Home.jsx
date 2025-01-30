import React from "react";
import { useSelector, useDispatch } from "react-redux";
import TaskList from "../components/TaskList";
import { deleteTask } from "../Redux/taskSlice";

const HomePage = () => {
  const tasks = useSelector((state) => state.tasks.tasks); // Ensure correct state structure
  const dispatch = useDispatch();

  const handleDelete = (index) => {
    dispatch(deleteTask(index));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Task List</h1>
      {tasks && tasks.length > 0 ? ( // Ensure tasks are correctly retrieved
        <TaskList tasks={tasks} onDelete={handleDelete} />
      ) : (
        <p className="text-gray-600">No tasks available.</p>
      )}
    </div>
  );
};

export default HomePage;
