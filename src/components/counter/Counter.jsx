import React, { useState } from "react";
import Button from "../button/Button";

const Counter = ({ name, onClick }) => {
  const [number, setNumber] = useState(0);

  return (
    <>
      <Button
        name="-"
        onClick={number > 0 ? () => setNumber(number - 1) : null}
      />
      <input
        style={{ marginLeft: "10px", marginRight: "10px" }}
        value={number}
      />
      <Button
        name="+"
        onClick={number > 20 ? () => setNumber(0) : () => setNumber(number + 1)}
      />
    </>
  );
};

export default Counter;
