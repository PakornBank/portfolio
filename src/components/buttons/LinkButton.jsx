import React from "react";
import { LinkButtonStyled } from "./LinkButtonStyles.js";

export default function LinkButton({ link, children }) {
  return <LinkButtonStyled href={link}>{children}</LinkButtonStyled>;
}
