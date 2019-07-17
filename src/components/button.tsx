import { css } from "emotion";
import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export const Button: React.FC<ButtonProps> = ({ className, ...props }) => (
  <button
    className={css`
      padding: 14px 20px;
      border: none;
      border-radius: 4px;
      background-color: #00bcd4;
      color: white;
      cursor: pointer;

      ${className};
    `}
    {...props}
  />
);
