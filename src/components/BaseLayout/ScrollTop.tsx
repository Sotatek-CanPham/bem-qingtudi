import React, { useState, useEffect } from "react";
import { styled } from "@mui/system";

const BackToTop = styled("div")({
  boxSizing: "border-box",
  position: "fixed",
  display: "flex",
  right: 30,
  bottom: 30,
  justifyContent: "center",
  alignItems: "center",
  width: 48,
  height: 48,
  lineHeight: 40,
  borderRadius: "50%",
  background: "#612a92",
  border: "6px solid #bb9dd6",
  zIndex: 100,
  transition: "all 0.3s ease-in-out 0s",
  cursor: "pointer",

  img: {
    verticalAlign: "middle",
    border: 0,
    color: "#ccc",
  },

  "&:hover": {
    border: "4px solid #C5EEE3",
  },
});

const ScrollTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  if (!isVisible) return null;

  return (
    <BackToTop onClick={scrollToTop}>
      <img src="/images/icons/arrow-top.svg" alt="" />
    </BackToTop>
  );
};

export default ScrollTop;
