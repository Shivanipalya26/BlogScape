import { FC } from "react";
import * as T from "../../styles/typography";

type ButtonProps = {
  children: React.ReactNode;
  htmlFor?: "submit" | "reset" | "button";
  onClick?: () => void;
};

export const Button: FC<ButtonProps> = ({
  children,
  htmlFor,
  onClick,
  ...props
}) => {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded w-full"
      onClick={onClick}
      type={htmlFor}
      {...props}
    >
      <T.P>{children}</T.P>
    </button>
  );
};
