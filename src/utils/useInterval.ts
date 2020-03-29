import { useEffect, useRef } from 'react';

const useInterval = (
  callback: () => void,
  delay: number | null,
): void => {
  const savedCallback = useRef();

  useEffect(() => {
    // @ts-ignore
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const tick = () => (
      // @ts-ignore
      savedCallback.current()
    );

    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};

export default useInterval;
