import "../App.css";
import React, { useEffect, useState } from "react";
import Task from "./Task";

function Home() {
  const initialStorage = localStorage.getItem("tasks")
    ? JSON.parse(localStorage.getItem("tasks"))
    : [];
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tasks, setTasks] = useState(initialStorage);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const submitHandler = (e) => {
    e.preventDefault();
    setTasks([...tasks, { title, description }]);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    setTitle("");
    setDescription("");
  };

  const deleteTask = (index) => {
    const filteredTask = tasks.filter((val, i) => {
      return i !== index;
    });
    setTasks(filteredTask);
    console.log(filteredTask);
  };

  return (
    <div className="container">
      <h1>Daily Goals</h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      {tasks.map((item, index) => (
        <Task
          key={index}
          title={item.title}
          description={item.description}
          index={index}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
}

export default Home;
