import { css } from "styled-components/macro";
import { rgba } from "polished";
import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export const Button: React.FC<ButtonProps> = ({ className, ...props }) => (
  <button
    css={css`
      padding: 14px 20px;
      border: none;
      border-radius: 4px;
      background-color: #00bcd4;
      color: white;
      cursor: pointer;

      &:hover {
        background-color: ${rgba("#00bcd4", 0.8)};
      }

      ${className};
    `}
    {...props}
  />
);
