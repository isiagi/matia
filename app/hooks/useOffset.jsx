import { useEffect, useState } from "react";

function useOffset() {
  const [offSet, setOffSet] = useState(0);

  useEffect(() => {
    window.onscroll = () => {
      setOffSet(window.scrollY);
    };
  }, []);

  return [offSet];
}

export default useOffset;
