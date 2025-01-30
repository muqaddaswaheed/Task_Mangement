import React from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../Redux/taskSlice";
import TaskForm from "../Components/TaskForm";

 
 const AddTask = () => {
  const dispatch = useDispatch();

  const handleAddTask = (taskName) => {
    dispatch(addTask(taskName)
  );
 
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Add Task</h1>
      <TaskForm onSubmit={handleAddTask} />
    </div>
  );
};

export default AddTask;
