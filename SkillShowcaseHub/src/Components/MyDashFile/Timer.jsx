import { useState, useEffect } from "react";
export function Timer() {
  const initialCount = 12 * 60 * 60;
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    const timerId = setInterval(() => {
      setCount((prev) => {
        if (prev === 0) {
          clearInterval(timerId);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  const hours = Math.floor(count / 3600);
  const minutes = Math.floor((count % 3600) / 60);
  const seconds = count % 60;

  return (
    <>
      <p>
        {hours}: {minutes}: {seconds}
      </p>
    </>
  );
}
