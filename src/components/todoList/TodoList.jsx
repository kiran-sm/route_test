import React, { useState } from "react";

const TodoList = () => {
  const [userInput, setUserInput] = useState("");
  const [addList, setAddList] = useState([]);
  const addListHandler = () => {
    setAddList([userInput, ...addList]);
    setUserInput("");
  };
  const deleteHandler = (index) => {
    const updateList = [...addList];
    updateList.splice(index, 1);
    setAddList(updateList);
  };
  return (
    <div style={{ margin: "25px 0" }}>
      <input
        type="text"
        style={{ marginRight: "10px" }}
        onChange={(e) => {
          setUserInput(e.target.value);
        }}
        value={userInput}
        placeholder="Enter task"
      />

      <button onClick={addListHandler}>Add List</button>
      <h3>Added List</h3>
      <ui>
        {addList.map((list, index) => (
          <li key={index} style={{ margin: "25px" }}>
            {list}{" "}
            <button onClick={() => deleteHandler(index)}>Delete Task</button>{" "}
          </li>
        ))}
      </ui>
    </div>
  );
};

export default TodoList;
