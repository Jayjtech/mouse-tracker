import { useEffect, useRef, useState, useCallback } from "react";

export const useIdleTimer = ({ timeout, onIdle }) => {
  const [isIdle, setIsIdle] = useState(false);
  const timerId = useRef(null);

  const goIdle = useCallback(() => {
    setIsIdle(true);
    onIdle();
  }, [onIdle]);

  const startTimer = useCallback(() => {
    if (timerId.current) {
      clearTimeout(timerId.current);
    }
    timerId.current = setTimeout(goIdle, timeout);
  }, [goIdle, timeout]);

  const handleActivity = useCallback(() => {
    if (isIdle) {
      setIsIdle(false); // user becomes active again
    }
    startTimer(); // restart idle countdown
  }, [isIdle, startTimer]);

  useEffect(() => {
    const events = [
      "mousemove",
      "keydown",
      "mousedown",
      "touchstart",
      "scroll",
    ];

    events.forEach((event) => window.addEventListener(event, handleActivity));

    startTimer(); // start on mount

    return () => {
      if (timerId.current) clearTimeout(timerId.current);
      events.forEach((event) =>
        window.removeEventListener(event, handleActivity)
      );
    };
  }, [handleActivity, startTimer]);

  return { isIdle };
};
