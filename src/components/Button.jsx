import React from "react";
import { ArrowUpRight } from "lucide-react";

export const Button = ({
  children,
  as: Tag = "button",
  variant = "primary",
  size = "default",
  withArrow = false,
  className = "",
  ...rest
}) => {
  const base = "btn-pill";
  const sz = size === "sm" ? "btn-pill-sm" : "";
  const variantClass = variant === "ghost" ? "btn-ghost" : "";
  return (
    <Tag className={`${base} ${sz} ${variantClass} ${className}`} {...rest}>
      <span>{children}</span>
      {withArrow && <ArrowUpRight className="w-4 h-4" strokeWidth={1.6} />}
    </Tag>
  );
};

export default Button;
