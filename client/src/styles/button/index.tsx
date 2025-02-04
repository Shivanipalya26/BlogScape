import { FC } from "react";
import * as T from "../../styles/typography";
import { Link } from "react-router-dom";

type ButtonProps = {
  children?: React.ReactNode;
  htmlFor?: "submit" | "reset" | "button";
  onClick?: () => void;
};

type LinkButtonProps = {
  children?: React.ReactNode;
  to: string;
  target?: "_blank" | "_self";
  onClick?: () => void;
  className?: string;
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

export const LinkButton: FC<LinkButtonProps> = ({
  children,
  to,
  target = "_self",
  onClick,
  className,
  ...props
}) => {
  const isExternal = to?.startsWith("http") || to?.startsWith("www");

  return isExternal ? (
    <a
      href={to}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined} 
      className={`bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded w-full ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </a>
  ) : (
    <Link
      to={to}
      className={`bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </Link>
  );
};
