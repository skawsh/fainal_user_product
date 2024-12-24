import { useState, useEffect, useCallback } from 'react';

export function useSlideshow(length: number, interval = 5000) {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent(current => (current + 1) % length);
  }, [length]);

  const prev = useCallback(() => {
    setCurrent(current => (current - 1 + length) % length);
  }, [length]);

  const goTo = useCallback((index: number) => {
    setCurrent(index);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, interval);
    return () => clearInterval(timer);
  }, [next, interval]);

  return { current, next, prev, goTo };
}