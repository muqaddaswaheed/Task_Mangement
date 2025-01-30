import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, onDelete }) => {
  return (
    <div>
      {tasks.length > 0 ? (
        tasks.map((task, index) => (
          <TaskItem key={index} task={task} index={index} onDelete={onDelete} />
        ))
      ) : (
        <p className="text-gray-600">No tasks available.</p>
      )}
    </div>
  );
};

export default TaskList;
