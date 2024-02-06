import { useEffect, useState } from "react";

interface DebounceProps {
  value: string | boolean;
  delay: number;
}

const useDebounce = ({ value, delay }: DebounceProps) => {
  const [debouncedValue, setDebouncedValue] = useState<string | boolean>(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
};

export default useDebounce;
