import React, { FC } from "react";

export const Button: FC<ButtonProps> = ({ children, onClick = () => {} }) => {
  return (
    <button
      onClick={onClick}
      className="bg-gray-600 text-white p-3 rounded-lg text-md"
    >
      {children}
    </button>
  );
};

interface ButtonProps {
  onClick?: () => void;
}
