import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useIdleTimer } from "./hooks/useIdleTime";

const App = () => {
  const [count, setCount] = useState(0);
  const { isIdle } = useIdleTimer({
    timeout: 5000, // 5 seconds
    onIdle: () => {
      console.log("You have been idle for 5 seconds!");
    },
  });

  return (
    <div>
      <h3>Status: {isIdle ? "Idle 💤" : "Active ⚡"}</h3>
    </div>
  );
};

export default App;
