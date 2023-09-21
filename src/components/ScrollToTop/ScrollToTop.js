import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.onunload = function () {
      window.scrollTo(0, 0);
    }
  }, []);

  return null;
}