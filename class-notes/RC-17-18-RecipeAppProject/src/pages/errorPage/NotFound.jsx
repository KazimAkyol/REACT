import React, { useEffect, useState } from "react";
import Main from "./NotFoundStyle";

const NotFound = () => {
  const [counter, setCounter] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCounter(counter - 1);

      if (counter === 0) {
        clearInterval(timer);
      }

      return () => clearInterval(timer);
    }, 1000);
  }, [counter]);

  return (
    <Main>
      <h3>Something went wrong</h3>
      <p>
        Within <strong>{counter}</strong> seconds, you will be drirected to the
        Home
      </p>
    </Main>
  );
};

export default NotFound;
