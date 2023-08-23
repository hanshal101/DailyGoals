import React from "react";
import "../App.css";

export const Task = ({ title, description, deleteTask, index }) => {
  return (
    <div className="Task">
      <div>
        <p>{title}</p>
        <span>{description}</span>
      </div>
      <button
        onClick={() => {
          deleteTask(index);
        }}
      >
        -
      </button>
    </div>
  );
};

export default Task;
