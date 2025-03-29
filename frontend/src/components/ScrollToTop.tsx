
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTopOnRouteChange: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on route change
  }, [location]); // Trigger on location change

  return null;
};

export default ScrollToTopOnRouteChange;