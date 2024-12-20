// Props.js
import React, { useState } from 'react';

function Props() {
  let [taskList, setTaskList] = useState([]);
  let [task, setTask] = useState("");
  let [taskSubmit, setTaskSubmit] = useState(false);

  let updateTask = (event) => {
    setTask(event.target.value);
  };

  let addTask = (event) => {
    event.preventDefault();
    if (task) {
      setTaskList([...taskList, task]);
      setTask("");
      setTaskSubmit(false);
    } else {
      setTaskSubmit(true);
    }
  };

  return (
    <PropsList
      taskList={taskList}
      taskProp={task}
      taskSubmit={taskSubmit}
      updateTask={updateTask}
      addTask={addTask}
    />
  );
}

export default Props;
