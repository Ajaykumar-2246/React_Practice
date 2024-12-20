import "./to-do.css";
import { useState } from "react";

function ToDoList() {
  const [taskList, setTaskList] = useState([]);
  const [task, setTask] = useState("");
  const [taskSubmit, setTaskSubmit] = useState(false);

  const updateTask = (event) => {
    setTask(event.target.value);
  };

  const addTask = (event) => {
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
    <div className="todolist">
      <h1>TO-DO-LIST</h1>
      <form action="">
        <div className="text-field">
          <input
            className="input"
            type="text"
            onChange={updateTask}
            value={task}
          />
          {taskSubmit && <div className="valid">Please enter the text</div>}
        </div>
        <input className="button" type="submit" onClick={addTask} value="Add" />
      </form>
      {taskList.map((item, index) => (
        <ul key={index}>
          <li className="list">
            <div>{item}</div>
          </li>
        </ul>
      ))}
    </div>
  );
}

export default ToDoList;
