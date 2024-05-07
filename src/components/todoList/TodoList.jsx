import React, { useState } from "react";
import { FaPen } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";

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

  const editHandler = () => {
    alert("this function not enabled");
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
            <button
              style={{
                background: "#f00",
                marginRight: "20px",
                padding: "5px",
                borderRadius: "5px",
              }}
              onClick={() => deleteHandler(index)}
            >
              <RiDeleteBin5Line style={{ height: "12px", width: "12px" }} />
            </button>
            <button
              style={{
                background: "#0f0",
                padding: "5px",
                borderRadius: "5px",
              }}
              onClick={() => editHandler(index)}
            >
              <FaPen style={{ height: "12px", width: "12px" }} />
            </button>
          </li>
        ))}
      </ui>
    </div>
  );
};

export default TodoList;
