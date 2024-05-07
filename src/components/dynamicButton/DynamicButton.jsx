import React from "react";

const DynamicButton = () => {
  const buttons = [];
  for (let i = 0; i <= 20; i++) {
    buttons.push(
      <button key={i} style={{ background: `#a${i}ab`, margin: "5px" }}>
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
