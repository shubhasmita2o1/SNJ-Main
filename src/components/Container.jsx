import React from "react";

export const Container = ({ children, className = "", size = "default" }) => {
  const max =
    size === "narrow" ? "max-w-[1080px]" : size === "wide" ? "max-w-[1440px]" : "max-w-[1280px]";
  return <div className={`${max} mx-auto px-6 md:px-10 ${className}`}>{children}</div>;
};

export default Container;
