import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const isMobile = window.innerWidth < 768;

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: isMobile ? "auto" : "smooth",
    });
  }, [pathname]);

  return null;
}
