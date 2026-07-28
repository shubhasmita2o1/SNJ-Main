import React from "react";
import useReveal from "../hooks/useReveal";

export const Reveal = ({ children, delay = 0, as: Tag = "div", className = "", strong = false, ...rest }) => {
  const { ref, visible } = useReveal();
  const delayClass =
    delay === 1 ? "fade-up-delay-1"
    : delay === 2 ? "fade-up-delay-2"
    : delay === 3 ? "fade-up-delay-3"
    : delay === 4 ? "fade-up-delay-4"
    : "";
  const baseClass = strong ? "fade-up-strong" : "fade-up";
  return (
    <Tag
      ref={ref}
      className={`${baseClass} ${delayClass} ${visible ? "is-visible" : ""} ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export default Reveal;