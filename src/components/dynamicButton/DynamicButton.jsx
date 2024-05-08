import React from "react";

const DynamicButton = () => {
  const buttons = [];
  for (let i = 1; i <= 2; i++) {
    buttons.push(
      <button key={i} style={{ background: `#${i}ab`, margin: "5px" }}>
        Button {i}
      </button>
    );
  }
  return (
    <>
      DynamicButton
      <div>{buttons}</div>
    </>
  );
};

export default DynamicButton;
