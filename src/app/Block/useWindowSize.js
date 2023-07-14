import { useLayoutEffect, useState } from "react";

export const useWindowSize = () => {
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    const getWidth = () => {
      setWidth(window.innerWidth);
    }
    window.addEventListener('resize', getWidth);
    getWidth();
    return () => window.removeEventListener('resize', getWidth);
  }, []);

  return width;
}
