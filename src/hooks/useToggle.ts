import { useState } from "react";
import { toggleProps } from "../pages/main/Home";

export const useToggle = () => {
  const [state, setState] = useState(false);

  const toggle = () => {
    setState(!state);
  };

  return { state, toggle };
};
