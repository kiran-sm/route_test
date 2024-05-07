import React, { useEffect, useState } from "react";

const AutoCount = () => {
  const [count, setCount] = useState();
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((i) => (i < 20 ? i + 1 : 1));
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return <div>Count: {count}</div>;
};

export default AutoCount;
