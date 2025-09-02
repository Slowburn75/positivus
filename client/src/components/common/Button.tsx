// src/components/common/Button.tsx
import React from "react";
import clsx from "clsx";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "outline";
};

export const Button: React.FC<ButtonProps> = ({ variant = "primary", className, children, ...rest }) => {
  const base = "inline-flex items-center justify-center rounded-2xl font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variants = {
    primary: "bg-primary text-black px-5 py-3 hover:brightness-95",
    outline: "border border-gray-300 text-gray-800 px-4 py-2 bg-white hover:bg-gray-50"
  };
  return (
    <button className={clsx(base, variants[variant], className)} {...rest}>
      {children}
    </button>
  );
};
