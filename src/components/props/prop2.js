import './prop2.css';

function PropsList({
  taskList,
  task,
  taskSubmit,
  updateTask,
  addTask,
}) {
  return (
    <div className="todolistprops">
      <form action=""class="from">
        <div className="text-field">
          <input
            className="input addtext"
            type="text"
            onChange={updateTask}
            value={task}
          />
          <input
          className="button addtext"
          type="submit"
          onClick={addTask}
          value="Add"
        />
          {taskSubmit && <div className="valid">Please enter the text</div>}
        </div>
      </form>
      {taskList &&
        taskList.map((item, index) => (
          <ul key={index}  className="item">
            <li className="list">
              <div>{item}</div>
            </li>
          </ul>
        ))}
    </div>
  );
}

export default PropsList;
