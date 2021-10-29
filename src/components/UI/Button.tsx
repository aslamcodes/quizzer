import React, { FC } from "react";

export const Button: FC<ButtonProps> = ({
  children,
  onClick = () => {},
  disabled = false,
}) => {
  return (
    <button
      onClick={onClick}
      className={`bg-gray-600 text-white p-3 rounded-lg text-md transition-opacity duration-300 ${
        disabled && "opacity-30"
      }`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

interface ButtonProps {
  onClick?: () => void;
  disabled?: boolean;
}
